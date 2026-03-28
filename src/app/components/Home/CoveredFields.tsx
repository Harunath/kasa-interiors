"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// React Icons
import { GiKnifeFork } from "react-icons/gi";
import { LuArmchair } from "react-icons/lu";
import { PiLampPendantLight } from "react-icons/pi";

const ACCENT = "#447f80";

const SERVICES = [
	{
		key: "modular-kitchens",
		title: "Modular Kitchens",
		tagline: "Built around how you cook.",
		desc: "Smart, ergonomic kitchens with durable finishes and efficient storage.",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240653/Red-colour-modular-kitchens_ftp5b4.jpg",
		icon: GiKnifeFork,
	},
	{
		key: "bespoke-furniture",
		title: "Bespoke Furniture & Units",
		tagline: "Made-to-measure interiors.",
		desc: "Tailored furniture pieces that match your space, style and storage needs.",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240669/furniture_nptwdj.jpg",
		icon: LuArmchair,
	},
	{
		key: "lighting-design",
		title: "Lighting Design",
		tagline: "Mood, function and focus.",
		desc: "Layered lighting plans that highlight details and keep spaces comfortable.",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240700/lights_ykewus.jpg",
		icon: PiLampPendantLight,
	},
];

export default function CoveredFieldsSection() {
	return (
		<section className="relative w-full bg-[#f3f6f6] py-16 sm:py-20 lg:py-24">
			{/* subtle background pattern */}
			<div className="pointer-events-none absolute inset-0 opacity-70">
				<div
					className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
					style={{ backgroundColor: "rgba(68,127,128,0.18)" }}
				/>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top\, rgba(148,163,184,0.12) 0\, transparent 55%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size[80px_80px]" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mx-auto max-w-3xl text-center">
					<p
						className="inline-flex items-center justify-center rounded-full border bg-white/80 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] shadow-sm"
						style={{ borderColor: "rgba(68,127,128,0.35)", color: ACCENT }}>
						Working Areas
					</p>

					<h2 className="mt-4 text-2xl font-semibold uppercase tracking-[0.16em] text-slate-900 sm:text-3xl md:text-[2.1rem]">
						Designed{" "}
						<span className="font-extrabold" style={{ color: ACCENT }}>
							Spaces
						</span>
					</h2>

					<p className="mt-4 text-sm text-slate-600 sm:text-base">
						From high-precision kitchens to customised furniture and lighting,
						we create interiors that feel elevated and timeless.
					</p>
				</div>

				{/* Cards */}
				<div className="mt-12 grid gap-8 md:grid-cols-3">
					{SERVICES.map((service) => {
						const Icon = service.icon;
						return (
							<motion.article
								key={service.key}
								whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
								transition={{ type: "spring", stiffness: 200, damping: 18 }}
								className="
									group relative flex flex-col overflow-hidden
									rounded-[1.4rem] border border-slate-100/80
									bg-white/95 shadow-[0_16px_45px_rgba(15,23,42,0.12)]
									backdrop-blur-md
									transition-all duration-400
								">
								{/* accent glow border on hover */}
								<div
									className="pointer-events-none absolute inset-0 rounded-[1.4rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									style={{
										boxShadow:
											"0 0 0 1px rgba(68,127,128,0.25), 0 20px 60px rgba(68,127,128,0.2)",
									}}
								/>

								{/* Image */}
								<div className="relative h-56 overflow-hidden rounded-t-[1.4rem]">
									<Image
										src={service.image}
										alt={service.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>

									{/* Image overlay */}
									<div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

									{/* Icon bubble with ring */}
									<div className="absolute right-4 bottom-4 flex items-center gap-2">
										<div
											className="h-10 w-10 rounded-full border border-white/40 bg-white/20"
											style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.45)" }}
										/>
										<div className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.4)]">
											<Icon className="h-6 w-6" style={{ color: ACCENT }} />
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="relative px-6 py-6">
									{/* subtle accent bar */}
									<div className="mb-3 flex items-center gap-2">
										<div
											className="h-0.5 w-10 rounded-full"
											style={{
												background: `linear-gradient(to right, ${ACCENT}, ${ACCENT}aa)`,
											}}
										/>
										<p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
											Interior Focus
										</p>
									</div>

									<h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
										{service.title}
									</h3>

									<p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
										{service.tagline}
									</p>

									<p className="mt-3 text-sm text-slate-700 group-hover:text-slate-800">
										{service.desc}
									</p>

									{/* bottom chip */}
									<div className="mt-4 flex items-center justify-between text-[0.78rem] text-slate-500">
										<span className="rounded-full bg-slate-50 px-3 py-1">
											Detail-driven execution
										</span>
									</div>
								</div>
							</motion.article>
						);
					})}
				</div>

				{/* Global View More Button */}
				<div className="mt-12 flex justify-center">
					<motion.a
						whileHover={{ y: -2, scale: 1.02 }}
						whileTap={{ scale: 0.97 }}
						href="/services"
						className="
							inline-flex items-center gap-2 rounded-full border
							bg-white px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.22em]
							shadow-[0_12px_28px_rgba(15,23,42,0.18)]
							transition-all duration-300
							text-slate-900 hover:bg-slate-900 hover:text-white
						"
						style={{ borderColor: ACCENT }}>
						View More
						<span className="text-sm" style={{ color: "currentColor" }}>
							➝
						</span>
					</motion.a>
				</div>
			</div>
		</section>
	);
}
