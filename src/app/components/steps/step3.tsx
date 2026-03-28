"use client";

import { useConsultationStore } from "@/lib/store/useConsultationStore";

export default function Step3() {
	const { name, phone, email, setDetails, errors } = useConsultationStore();

	return (
		<div>
			<h2 className="text-xl font-semibold mb-6 text-[#447f80]">
				Your Details
			</h2>

			<div className="space-y-5">
				{/* Name */}
				<div>
					<label className="text-sm font-medium text-slate-600">
						Full Name
					</label>
					<input
						value={name}
						onChange={(e) => setDetails({ name: e.target.value, phone, email })}
						className={`w-full mt-1 border rounded-xl px-4 py-3 text-sm
						focus:outline-none focus:ring-2 transition
						${
							errors?.name
								? "border-red-400 focus:ring-red-300"
								: "border-[#447f80]/30 focus:ring-[#447f80]/40"
						}`}
						placeholder="Enter your name"
					/>
					{errors?.name && (
						<p className="text-red-500 text-xs mt-1">{errors.name}</p>
					)}
				</div>

				{/* Phone */}
				<div>
					<label className="text-sm font-medium text-slate-600">
						Phone Number
					</label>
					<input
						value={phone}
						onChange={(e) => setDetails({ name, phone: e.target.value, email })}
						className={`w-full mt-1 border rounded-xl px-4 py-3 text-sm
						focus:outline-none focus:ring-2 transition
						${
							errors?.phone
								? "border-red-400 focus:ring-red-300"
								: "border-[#447f80]/30 focus:ring-[#447f80]/40"
						}`}
						placeholder="Enter your phone number"
					/>
					{errors?.phone && (
						<p className="text-red-500 text-xs mt-1">{errors.phone}</p>
					)}
				</div>

				{/* Email */}
				<div>
					<label className="text-sm font-medium text-slate-600">
						Email Address
					</label>
					<input
						value={email}
						onChange={(e) => setDetails({ name, phone, email: e.target.value })}
						className={`w-full mt-1 border rounded-xl px-4 py-3 text-sm
						focus:outline-none focus:ring-2 transition
						${
							errors?.email
								? "border-red-400 focus:ring-red-300"
								: "border-[#447f80]/30 focus:ring-[#447f80]/40"
						}`}
						placeholder="Enter your email"
					/>
					{errors?.email && (
						<p className="text-red-500 text-xs mt-1">{errors.email}</p>
					)}
				</div>
			</div>
		</div>
	);
}
