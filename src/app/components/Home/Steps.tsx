"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const ACCENT = "#447f80";

const STEPS = [
	{
		id: 1,
		title: "Discover",
		desc: "Explore more than just modular design ideas with our experts. We understand your space, lifestyle and budget before we start designing.",
	},
	{
		id: 2,
		title: "Design & Detail",
		desc: "We create detailed layouts, 3D visuals, material palettes and estimates – tailored to how you live and use every corner.",
	},
	{
		id: 3,
		title: "Build & Handover",
		desc: "Our team executes on site, coordinates vendors and finishes every detail, handing over a move-in ready, Kasa-finished home.",
	},
];

export default function ThreeStepSection() {
	const [activeStep, setActiveStep] = useState(1);

	// auto-rotate steps
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveStep((prev) => (prev === STEPS.length ? 1 : prev + 1));
		}, 4500); // 4.5s per step
		return () => clearInterval(interval);
	}, []);

	const current = STEPS.find((s) => s.id === activeStep)!;

	return (
		<section className="w-full bg-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
				{/* LEFT: image + accent glow */}
				<div className="flex w-full justify-center lg:w-1/2">
					<div className="relative w-full max-w-md">
						{/* TILTED SQUARE */}
						<motion.div
							className="absolute inset-0 m-auto h-[85%] w-[85%] bg-[#447f8033] rounded-2xl"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0, rotate: -10, scale: 1.05 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.5, ease: "easeOut" }}></motion.div>

						{/* IMAGE CARD */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0, rotate: 5 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="relative overflow-hidden rounded-4xl bg-white shadow-[0_28px_70px_rgba(15,23,42,0.2)] z-10">
							<Image
								src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433918/pngtree-3d-rendering-of-scandinavian-inspired-living-room-interior-image_3726765_x0kuvt.jpg"
								alt="Kasa Interiors living room"
								width={400}
								height={600}
								className="h-full w-full object-cover"
								priority
							/>
						</motion.div>
					</div>
				</div>
				{/* RIGHT: heading + stepper + text */}
				<div className="w-full lg:w-1/2">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.45 }}
						className="text-2xl font-semibold text-slate-900 sm:text-[1.9rem]">
						Complete home interiors in{" "}
						<span className="text-slate-900">3 easy steps</span>
					</motion.h2>

					{/* STEP INDICATOR 1–2–3 with connectors */}
					<div className="mt-6 flex items-center">
						{STEPS.map((step, index) => {
							const isActive = step.id === activeStep;
							const isLast = index === STEPS.length - 1;

							return (
								<div key={step.id} className="flex items-center">
									<div
										className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium shadow-sm transition-all`}
										style={
											isActive
												? {
														backgroundColor: ACCENT,
														color: "white",
														boxShadow: "0 8px 20px rgba(68,127,128,0.45)",
													}
												: {
														backgroundColor: "white",
														color: "#4b5563",
														border: "1px solid #e5e7eb",
													}
										}>
										{step.id}
									</div>

									{/* connector line */}
									{!isLast && (
										<div className="mx-3 hidden h-px w-16 border-t border-dashed border-slate-300 sm:block" />
									)}
								</div>
							);
						})}
					</div>

					{/* animated step content */}
					<div className="mt-8">
						<AnimatePresence mode="wait">
							<motion.div
								key={current.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.35, ease: "easeOut" }}>
								<h3 className="text-xl font-semibold" style={{ color: ACCENT }}>
									{current.title}
								</h3>
								<p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
									{current.desc}
								</p>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>

			{/* CTA */}

			<div className="mt-10 flex justify-center">
				<Link href="/consultation">
					<button
						type="button"
						className="rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:translate-y-px hover:shadow-xl"
						style={{ backgroundColor: ACCENT }}>
						Book Free Design Session
					</button>
				</Link>
			</div>
		</section>
	);
}
