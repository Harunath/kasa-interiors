"use client";

import { motion, type Variants } from "framer-motion";
import { FiArrowRight, FiImage } from "react-icons/fi";

const BRAND = "#447f80";

const container: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" as const,
		},
	},
};

const stagger: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut" as const,
		},
	},
};

export default function Motto() {
	return (
		<section className="w-full bg-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				{/* SECTION LABEL */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					className="mb-10 text-center">
					<motion.p
						variants={item}
						className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#447f80]">
						Why Kasa Interiors?
					</motion.p>

					<motion.h2
						variants={item}
						className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Our Motto &amp; How We Work With You
					</motion.h2>
				</motion.div>

				{/* GRID */}
				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.25 }}
					className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
					{/* LEFT: MOTTO CARD with subtle pattern */}
					<motion.div
						variants={container}
						className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
						{/* background pattern */}
						<div className="pointer-events-none absolute inset-0 opacity-50">
							<div
								className="absolute -top-16 -left-16 h-40 w-40 rounded-full"
								style={{
									background: `radial-gradient(circle, ${BRAND}14 0%, transparent 65%)`,
								}}
							/>
							<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size[42px_42px]" />
						</div>

						<div className="relative z-10 space-y-5">
							<motion.div variants={item} className="flex items-center gap-3">
								<div
									className="h-[3px] w-12 rounded-full"
									style={{
										background: `linear-gradient(to right, ${BRAND}, ${BRAND}aa)`,
									}}
								/>
								<p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#447f80]">
									Our Motto
								</p>
							</motion.div>

							<motion.p
								variants={item}
								className="text-[0.95rem] leading-relaxed text-slate-700">
								“Our motto is to exceed the expectations of our clients with the
								finished spaces we deliver. We respect the past and keep an eye
								on the future, believing that creativity combined with
								exceptional diligence creates interiors of sophistication and
								richness.”
							</motion.p>

							<motion.p
								variants={item}
								className="text-[0.9rem] text-slate-500">
								Every project is a one-of-a-kind story — carefully detailed,
								thoughtfully layered, and tailored around your lifestyle.
							</motion.p>

							{/* mini emphasis row */}
							<motion.div
								variants={item}
								className="mt-3 flex flex-wrap gap-2 text-[0.75rem] text-slate-600">
								<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
									High-end finishes
								</span>
								<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
									Detail-first approach
								</span>
							</motion.div>
						</div>
					</motion.div>

					{/* RIGHT: CTA CARD with layered border + tag */}
					<motion.div
						variants={container}
						className="relative flex h-full flex-col">
						{/* back layer for 3D effect */}
						<div className="pointer-events-none absolute -right-3 top-6 hidden h-[88%] w-full rounded-3xl border border-[#447f80]/30 opacity-70 lg:block" />

						<motion.div
							whileHover={{ y: -4, scale: 1.01 }}
							transition={{ type: "spring", stiffness: 130, damping: 18 }}
							className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#447f80]/30 bg-[#447f80] p-px shadow-[0_20px_55px_rgba(15,23,42,0.45)]">
							<div className="relative h-full rounded-[1.4rem] bg-[#447f80]/96 p-7 sm:p-8">
								{/* top tag */}
								<div className="mb-4 flex items-center justify-between gap-3">
									<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/80">
										<span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/80" />
										Call to Action
									</div>
									<span className="text-[0.7rem] text-white/70">
										Concept to completion
									</span>
								</div>

								<motion.h3
									variants={item}
									className="text-xl font-semibold text-white sm:text-2xl">
									Do you have a project in mind?
								</motion.h3>

								<motion.p
									variants={item}
									className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-white/90">
									Design • Execute • Deliver
								</motion.p>

								<motion.p
									variants={item}
									className="mt-4 text-[0.95rem] leading-relaxed text-white/85">
									Whether it’s a residence, a retail interior, or a complete
									workspace transformation — we partner with you to shape every
									detail with clarity and care.
								</motion.p>

								{/* BUTTONS */}
								<motion.div
									variants={item}
									className="mt-6 flex flex-wrap gap-3">
									<motion.a
										whileHover={{ y: -2, scale: 1.02 }}
										whileTap={{ scale: 0.97 }}
										href="/contact"
										className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#447f80] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
										Let&apos;s Discuss
										<FiArrowRight className="h-4 w-4" />
									</motion.a>

									<motion.a
										whileHover={{ y: -2, scale: 1.02 }}
										whileTap={{ scale: 0.97 }}
										href="/gallery"
										className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-[#447f80]/20 px-5 py-2.5 text-sm font-medium text-white backdrop-blur">
										View Portfolio
										<FiImage className="h-4 w-4" />
									</motion.a>
								</motion.div>

								<motion.p
									variants={item}
									className="mt-5 text-[0.8rem] text-white/75">
									Share your floor plan, mood board, or even a simple idea — our
									team will translate it into a space you&apos;ll love living
									in.
								</motion.p>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
