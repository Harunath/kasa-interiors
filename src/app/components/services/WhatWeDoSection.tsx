"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#447f80";

const SERVICES = [
	{
		key: "modular-kitchens",
		title: "Modular Kitchens",
		tagline: "Designed for the way you live. Built to last.",
		desc: "We create ergonomic, stylish and highly functional kitchens tailored to your cooking style, layout and storage needs.",
		points: [
			"Custom layouts",
			"Branded hardware",
			"3D visualisation",
			"Efficient execution",
		],
		cta: "Explore Modular Kitchens",
		href: "/services/modular-kitchens",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240653/Red-colour-modular-kitchens_ftp5b4.jpg",
	},
	{
		key: "bespoke-furniture",
		title: "Bespoke Furniture & Interior Units",
		tagline: "Made-to-measure furniture crafted with precision.",
		desc: "From TV units and beds to study tables, crockery units and pooja rooms — we design furniture that complements your lifestyle.",
		points: [
			"Custom-built units",
			"Durable materials",
			"Functional layouts",
			"Designer aesthetics",
		],
		cta: "Explore Furniture Solutions",
		href: "/services/furniture",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240669/furniture_nptwdj.jpg",
	},
	{
		key: "lighting-design",
		title: "Lighting Design",
		tagline: "Lighting that sets the mood and highlights details.",
		desc: "We plan and execute layered lighting — ambient, task and accent — using premium fixtures and elegant layouts.",
		points: [
			"LED profiles & panel lights",
			"Chandeliers & feature lighting",
			"Accent & wall lighting",
			"Mood-based lighting plans",
		],
		cta: "Explore Lighting Design",
		href: "/services/lighting",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240700/lights_ykewus.jpg",
	},
	{
		key: "painting-wallpapers",
		title: "Painting & Wallpapers",
		tagline: "Premium finishes and expressive textures.",
		desc: "From smooth matte hues to textured paints and designer wallpapers, we help you create walls that become a visual highlight.",
		points: [
			"Accent walls",
			"Textured paints",
			"Premium wallpapers",
			"Clean professional finish",
		],
		cta: "Explore Wall Finishes",
		href: "/services/wall-finishes",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240714/beibehang-a-tree-flower-Murals-Wallpaper-3D-TV-Background-Large-Wall-Painting-wallpapers-for-Living-Room_zrgw1j.webp",
	},
	{
		key: "furnishings-decor",
		title: "Furnishings & Décor",
		tagline: "The final touch that completes your home.",
		desc: "Curtains, blinds, rugs, décor pieces and artwork — curated to bring warmth, character and balance to your interiors.",
		points: [
			"Soft furnishings",
			"Curtains & drapes",
			"Rugs & accessories",
			"Art & décor styling",
		],
		cta: "Explore Furnishings",
		href: "/services/furnishings",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764240683/ourservice1-bg4_uejhep.jpg",
	},
];

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const tileVariants: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: "easeOut",
			delay: 0.05 * i,
		},
	}),
};

export default function WhatWeDoSection() {
	const [activeKey, setActiveKey] = useState(SERVICES[0].key);
	const [isPaused, setIsPaused] = useState(false);

	const activeService =
		SERVICES.find((s) => s.key === activeKey) ?? SERVICES[0];

	// auto-rotate (pauses when user interacts)
	useEffect(() => {
		if (isPaused) return;
		const interval = setInterval(() => {
			setActiveKey((prev) => {
				const idx = SERVICES.findIndex((s) => s.key === prev);
				const nextIdx = (idx + 1) % SERVICES.length;
				return SERVICES[nextIdx].key;
			});
		}, 8000);
		return () => clearInterval(interval);
	}, [isPaused]);

	return (
		<section className="relative overflow-hidden bg-white py-14 md:py-18 lg:py-20">
			{/* Soft radial glow from accent color */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,127,128,0.14)_0%,transparent_65%)]" />

			<motion.div
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
				{/* Heading */}
				<div className="max-w-3xl">
					<p className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-700 shadow-sm">
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ background: ACCENT }}
						/>
						What We Do
					</p>

					<h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]">
						Transforming Homes, Apartments &amp; Modern Workspaces
					</h2>

					<p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
						Explore our specialised services crafted to elevate your interiors
						with clarity, comfort and long-lasting quality.
					</p>
				</div>

				{/* Main Grid */}
				<div className="mt-9 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-stretch">
					{/* LEFT LARGE CARD */}
					<div
						className="relative"
						onMouseEnter={() => setIsPaused(true)}
						onMouseLeave={() => setIsPaused(false)}
						onFocus={() => setIsPaused(true)}
						onBlur={() => setIsPaused(false)}>
						<div className="relative h-[400px] lg:h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeService.key}
									initial={{ opacity: 0, scale: 1.02, y: 12 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.98, y: -8 }}
									transition={{ duration: 0.5, ease: "easeOut" }}
									className="absolute inset-0">
									<Image
										src={activeService.image}
										alt={activeService.title}
										fill
										className="object-cover"
									/>
									{/* Stronger gradient for readability */}
									<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-transparent" />
								</motion.div>
							</AnimatePresence>

							{/* Content overlay */}
							<div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-6 lg:p-7">
								<div className="space-y-2">
									<p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/85 px-3 py-1 text-[0.7rem] font-medium text-slate-800 shadow-sm">
										<span
											className="h-1.5 w-1.5 rounded-full"
											style={{ background: ACCENT }}
										/>
										{activeService.tagline}
									</p>

									<h3 className="text-lg font-semibold text-white sm:text-xl lg:text-[1.4rem]">
										{activeService.title}
									</h3>

									<p className="max-w-xl text-[0.86rem] leading-relaxed text-slate-100">
										{activeService.desc}
									</p>
								</div>

								<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
									{/* Points list */}
									<ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[0.8rem] text-slate-100 sm:max-w-md">
										{activeService.points.map((point) => (
											<li key={point} className="flex items-center gap-2">
												<span
													className="h-1 w-3 rounded-full"
													style={{ background: ACCENT }}
												/>
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE TILES */}
					<div
						className="flex flex-col gap-4"
						onMouseEnter={() => setIsPaused(true)}
						onMouseLeave={() => setIsPaused(false)}
						onFocus={() => setIsPaused(true)}
						onBlur={() => setIsPaused(false)}>
						<p className="text-[0.78rem] uppercase tracking-[0.22em] text-slate-500">
							Service Categories
						</p>

						<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
							{SERVICES.map((service, index) => {
								const isActive = service.key === activeKey;

								return (
									<motion.button
										key={service.key}
										type="button"
										custom={index}
										variants={tileVariants}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.2 }}
										onMouseEnter={() => setActiveKey(service.key)}
										onFocus={() => setActiveKey(service.key)}
										aria-pressed={isActive}
										aria-label={`Preview ${service.title}`}
										className={`group relative flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left shadow-sm transition-all sm:px-4
                      ${
												isActive
													? "border-[#447f80] bg-[#eef5f5]"
													: "border-slate-200 bg-white hover:border-[#447f80]/70 hover:bg-slate-50"
											}`}>
										{/* Thumbnail */}
										<div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
											<Image
												src={service.image}
												alt={service.title}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										</div>

										<div className="flex flex-1 flex-col gap-1">
											<h4 className="text-[0.9rem] font-semibold text-slate-900">
												{service.title}
											</h4>

											<p className="text-[0.78rem] text-slate-600 line-clamp-2">
												{service.desc}
											</p>

											<span
												className={`mt-1 inline-flex items-center gap-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em]
                          ${
														isActive
															? "text-[#447f80]"
															: "text-slate-500 group-hover:text-[#447f80]"
													}`}>
												View Details
												<span className="text-xs transition-transform group-hover:translate-x-1">
													↗
												</span>
											</span>
										</div>

										{isActive && (
											<span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#447f80] shadow-[0_0_0_4px_rgba(68,127,128,0.3)]" />
										)}
									</motion.button>
								);
							})}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
