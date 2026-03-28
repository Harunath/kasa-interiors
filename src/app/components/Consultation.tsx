"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useConsultationStore } from "@/lib/store/useConsultationStore";
import Step1 from "@/app/components/steps/step1";
import Step2 from "@/app/components/steps/step2";
import Step3 from "@/app/components/steps/step3";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Consultation() {
	const router = useRouter();

	const {
		step,
		setStep,
		propertyType,
		rooms,
		name,
		phone,
		email,
		reset,
		validateStep,
	} = useConsultationStore();

	const [loading, setLoading] = useState(false);

	const next = () => {
		const isValid = validateStep();
		if (!isValid) return;

		if (step < 3) setStep(step + 1);
	};

	const back = () => {
		if (step > 1) setStep(step - 1);
	};

	const handleSubmit = async () => {
		const isValid = validateStep();
		if (!isValid) return;

		setLoading(true);

		try {
			const res = await fetch("/api/consultation", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					propertyType,
					rooms,
					name,
					phone,
					email,
				}),
			});

			if (!res.ok) throw new Error("Failed");

			alert("Request sent successfully 🚀");

			// ✅ Reset state
			reset();
			setStep(1);

			// ✅ Redirect to home
			router.push("/");
		} catch (err) {
			alert("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

			{/* Modal Wrapper */}
			<div className="w-full max-w-md relative z-10">
				{/* Glow */}
				<div className="absolute -inset-1.5 bg-[#447f80]/20 blur-xl rounded-2xl opacity-40" />

				{/* Card */}
				<div className="relative bg-white/95 backdrop-blur-xl border border-[#447f80]/20 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] p-5 sm:p-6">
					{/* Header */}
					<div className="mb-4">
						<div className="h-1 w-10 bg-[#447f80] rounded-full mb-3" />

						<h1 className="text-lg font-semibold text-slate-900">
							Book Consultation
						</h1>

						<p className="text-xs text-slate-500 mt-1">Step {step} of 3</p>

						{/* Progress */}
						<div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
							<div
								className="h-full bg-[#447f80] transition-all duration-300"
								style={{ width: `${(step / 3) * 100}%` }}
							/>
						</div>
					</div>

					{/* Steps */}
					<AnimatePresence mode="wait">
						<motion.div
							key={step}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.25 }}>
							{step === 1 && <Step1 />}
							{step === 2 && <Step2 />}
							{step === 3 && <Step3 />}
						</motion.div>
					</AnimatePresence>

					{/* Footer */}
					<div className="flex justify-between mt-6">
						{step > 1 ? (
							<button
								onClick={back}
								className="px-4 py-2 text-sm rounded-lg border border-[#447f80]/30 text-slate-700 hover:bg-[#447f80]/10 transition">
								Back
							</button>
						) : (
							<div />
						)}

						{step < 3 ? (
							<button
								onClick={next}
								className="ml-auto px-5 py-2 text-sm bg-[#447f80] text-white rounded-lg shadow hover:bg-[#356566] transition">
								Next →
							</button>
						) : (
							<button
								onClick={handleSubmit}
								disabled={loading}
								className="ml-auto px-5 py-2 text-sm bg-[#447f80] text-white rounded-lg shadow hover:bg-[#356566] transition disabled:opacity-50">
								{loading ? "Sending..." : "Submit"}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
