"use client";

import { useConsultationStore } from "@/lib/store/useConsultationStore";

const options = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

export default function Step1() {
	const { propertyType, setPropertyType, errors } = useConsultationStore();

	return (
		<div>
			<h2 className="text-xl font-semibold mb-6 text-[#447f80]">
				Select Your Property Type
			</h2>

			<div className="grid grid-cols-2 gap-4">
				{options.map((opt) => {
					const isSelected = propertyType === opt;

					return (
						<button
							key={opt}
							onClick={() => setPropertyType(opt)}
							className={`rounded-2xl p-4 text-left transition-all border
							
							${
								isSelected
									? "border-[#447f80] bg-[#447f80]/10 shadow-md scale-[1.02]"
									: "border-[#447f80]/20 hover:border-[#447f80]/50 hover:shadow-sm"
							}`}>
							<p className="font-semibold text-slate-800">{opt}</p>

							{isSelected && (
								<p className="text-xs text-[#447f80] mt-1">Selected</p>
							)}
						</button>
					);
				})}
			</div>

			{/* Error */}
			{errors?.propertyType && (
				<p className="text-red-500 text-sm mt-3">{errors.propertyType}</p>
			)}
		</div>
	);
}
