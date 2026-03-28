import { create } from "zustand";

type Store = {
	step: number;

	propertyType: string;

	rooms: {
		living: number;
		kitchen: number;
		bedroom: number;
		bathroom: number;
		foyer: number;
		balcony: number;
	};

	name: string;
	phone: string;
	email: string;

	// ✅ NEW: errors
	errors: {
		propertyType?: string;
		name?: string;
		phone?: string;
		email?: string;
	};

	setStep: (step: number) => void;
	setPropertyType: (type: string) => void;
	updateRoom: (room: keyof Store["rooms"], value: number) => void;
	setDetails: (data: { name: string; phone: string; email: string }) => void;

	validateStep: () => boolean;
	clearErrors: () => void;

	reset: () => void;
};

export const useConsultationStore = create<Store>((set, get) => ({
	step: 1,
	propertyType: "",

	rooms: {
		living: 1,
		kitchen: 1,
		bedroom: 1,
		bathroom: 1,
		foyer: 0,
		balcony: 0,
	},

	name: "",
	phone: "",
	email: "",

	errors: {},

	setStep: (step) => set({ step }),

	setPropertyType: (type) =>
		set((state) => ({
			propertyType: type,
			errors: { ...state.errors, propertyType: undefined },
		})),

	updateRoom: (room, value) =>
		set((state) => ({
			rooms: { ...state.rooms, [room]: value },
		})),

	setDetails: (data) =>
		set((state) => ({
			...data,
			errors: {
				...state.errors,
				name: data.name ? undefined : state.errors.name,
				phone: data.phone ? undefined : state.errors.phone,
				email: data.email ? undefined : state.errors.email,
			},
		})),

	// ✅ VALIDATION LOGIC
	validateStep: () => {
		const { step, propertyType, name, phone, email } = get();

		let errors: Store["errors"] = {};

		if (step === 1 && !propertyType) {
			errors.propertyType = "Please select a property type";
		}

		if (step === 3) {
			if (!name) errors.name = "Name is required";
			if (!phone) errors.phone = "Phone is required";
			if (!email) errors.email = "Email is required";
		}

		set({ errors });

		return Object.keys(errors).length === 0;
	},

	clearErrors: () => set({ errors: {} }),

	reset: () =>
		set({
			step: 1,
			propertyType: "",
			name: "",
			phone: "",
			email: "",
			errors: {},
			rooms: {
				living: 1,
				kitchen: 1,
				bedroom: 1,
				bathroom: 1,
				foyer: 0,
				balcony: 0,
			},
		}),
}));
