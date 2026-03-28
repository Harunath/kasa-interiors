"use client";

import { useConsultationStore } from "@/lib/store/useConsultationStore";

const rooms = ["living", "kitchen", "bedroom", "bathroom", "foyer", "balcony"];

export default function Step2() {
	const { rooms: data, updateRoom } = useConsultationStore();

	return (
		<div>
			<h2 className="text-xl font-semibold mb-6 text-[#447f80]">
				Select Rooms To Design
			</h2>

			<div className="space-y-4">
				{rooms.map((room) => {
					const typedRoom = room as keyof typeof data;

					return (
						<div
							key={room}
							className="flex justify-between items-center border border-[#447f80]/20 p-4 rounded-2xl bg-white hover:border-[#447f80]/50 transition-all shadow-sm hover:shadow-md">
							<p className="capitalize text-slate-700 font-medium">{room}</p>

							<div className="flex items-center gap-3">
								{/* Minus */}
								<button
									onClick={() =>
										updateRoom(typedRoom, Math.max(0, data[typedRoom] - 1))
									}
									className="w-9 h-9 flex items-center justify-center rounded-full border border-[#447f80]/30 text-[#447f80] hover:bg-[#447f80]/10 transition">
									–
								</button>

								{/* Count */}
								<span className="min-w-[20px] text-center font-semibold text-slate-800">
									{data[typedRoom]}
								</span>

								{/* Plus */}
								<button
									onClick={() => updateRoom(typedRoom, data[typedRoom] + 1)}
									className="w-9 h-9 flex items-center justify-center rounded-full bg-[#447f80] text-white hover:bg-[#356566] transition shadow-sm">
									+
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
