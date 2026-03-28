"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward, IoPerson } from "react-icons/io5";

const ACCENT = "#447f80";

/* -------------------- DATA (UNCHANGED + COMPLETE) -------------------- */

type Testimonial = {
	name: string;
	role: string;
	quote: string;
	rating: number;
};

const TESTIMONIALS: Testimonial[] = [
	{
		name: "G. Vekataramana",
		role: "Vice President Glenmark Pharmaceuticals, Mumbai · Villa no 15, GK Villas Sainikpuri Hyderabad",
		quote:
			"Kasa Interiors delivered a refined and sophisticated design with exceptional execution quality.",
		rating: 5,
	},
	{
		name: "C.S. Rao",
		role: "MD, Sanco Infra Projects · My home Ankura Villa - 367",
		quote:
			"Professional, reliable, and detail-oriented execution from start to finish.",
		rating: 5,
	},
	{
		name: "Raghuramreddy",
		role: "Villa - 96, ACS Prime, Mokila, Hyderabad",
		quote: "Smooth execution and excellent finishing quality.",
		rating: 5,
	},
	{
		name: "Rackesh",
		role: "Villa No - 2, ACS Prime, Mokila, Hyderabad",
		quote: "Premium craftsmanship and elegant interiors.",
		rating: 5,
	},
	{
		name: "Dr. Anfas",
		role: "Paediatrician · Triplex House, Rajendranagar, Hyderabad",
		quote: "Beautiful and calming interiors with great attention to detail.",
		rating: 5,
	},
	{
		name: "Srinivas",
		role: "Villa 37, Gem Estrella, Kollur, Hyderabad",
		quote: "Timely delivery and high-quality execution.",
		rating: 5,
	},
	{
		name: "Srikan Puja",
		role: "Flat No 1710, Aparna Luxor Park",
		quote: "Smart design and luxurious finish.",
		rating: 5,
	},
	{
		name: "Vijay Shyamala (USA)",
		role: "Flat No 710, Bollineni Bion",
		quote: "Exceeded expectations with smooth execution.",
		rating: 5,
	},
	{
		name: "Nagesh",
		role: "Flat No 701, Bollineni Bion, Hyderabad",
		quote: "Clean execution and elegant design.",
		rating: 5,
	},
	{
		name: "Dr. Narsh",
		role: "Triplex villa, Zadcherla",
		quote: "Perfect blend of functionality and aesthetics.",
		rating: 5,
	},
	{
		name: "Ravi",
		role: "Flat no 405, Vasavi Metropolis, Hyderabad",
		quote: "Beautiful transformation of our space.",
		rating: 5,
	},
	{
		name: "Samantha",
		role: "Flat no 1305, Vasavi Metropolis, Hyderabad",
		quote: "Thoughtfully designed interiors.",
		rating: 5,
	},
	{
		name: "Rajesh",
		role: "Flat no 1001 B block, Trident Namisree, Hyderabad",
		quote: "Premium quality work and finish.",
		rating: 5,
	},
	{
		name: "Subbareddy",
		role: "Villa no 72, Hallmark Villas, Velimala, Hyderabad",
		quote: "Excellent coordination and execution.",
		rating: 5,
	},
	{
		name: "Raghava",
		role: "A/903 Sunshine Destino, Kokapet, Hyderabad",
		quote: "Impressive finishing and design.",
		rating: 5,
	},
	{
		name: "Dr. Mohan Maharaj",
		role: "Flat No 502, Meghana Royal · Apollo Hospitals, Visakhapatnam",
		quote: "Luxury and comfort combined perfectly.",
		rating: 5,
	},
	{
		name: "Dr. Rani",
		role: "Flat No 402, Meghana Royal, Visakhapatnam",
		quote: "Elegant and functional interiors.",
		rating: 5,
	},
	{
		name: "Usha",
		role: "Flat 608, Skypark, Visakhapatnam",
		quote: "Excellent detailing and finishing.",
		rating: 5,
	},
	{
		name: "Suryanarayana (USA)",
		role: "Flat 601, Skypark, Visakhapatnam",
		quote: "Highly trustworthy and professional.",
		rating: 5,
	},
	{
		name: "Shyam Sundar",
		role: "Flat 505, Skypark, Visakhapatnam",
		quote: "Very satisfied with the final output.",
		rating: 5,
	},
];

export default function Testimonials() {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;
		const t = setInterval(() => {
			setActive((p) => (p + 1) % TESTIMONIALS.length);
		}, 4000);
		return () => clearInterval(t);
	}, [paused]);

	const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
	const prev = () =>
		setActive((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

	const current = TESTIMONIALS[active];

	return (
		<section className="relative py-32 overflow-hidden">
			{/* 🌈 BACKGROUND */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#447f80]/10 via-white to-[#447f80]/5" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#447f80]/20 blur-[160px] opacity-30 -z-10" />

			<div className="max-w-6xl mx-auto px-6 text-center">
				{/* HEADER */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-5xl font-semibold text-slate-900 tracking-tight">
					What Our Clients Say
				</motion.h2>

				<p className="mt-4 text-slate-500 text-sm">
					Real experiences from homeowners
				</p>

				{/* CARD */}
				<div
					className="mt-20 relative"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}>
					<AnimatePresence mode="wait">
						<motion.div
							key={current.name}
							initial={{ opacity: 0, y: 60, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -60, scale: 0.95 }}
							transition={{ duration: 0.5 }}
							className="mx-auto max-w-3xl rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-2xl p-12 shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
							{/* QUOTE */}
							<div className="text-7xl text-[#447f80]/20 font-serif">“</div>

							<p className="mt-4 text-2xl font-medium text-slate-800 leading-relaxed">
								{current.quote}
							</p>

							{/* STARS */}
							<div className="flex justify-center gap-1 mt-5">
								{Array.from({ length: 5 }).map((_, i) => (
									<FaStar
										key={i}
										className={`${
											i < current.rating ? "text-[#447f80]" : "text-gray-300"
										} text-lg`}
									/>
								))}
							</div>

							{/* PROFILE */}
							<div className="mt-10 flex flex-col items-center">
								<div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#447f80] to-[#5fa3a5] text-white flex items-center justify-center text-xl font-semibold shadow-xl">
									{current.name.charAt(0)}
								</div>

								<p className="mt-3 font-semibold text-lg text-slate-900">
									{current.name}
								</p>

								<p className="text-xs uppercase tracking-wide text-slate-500">
									{current.role}
								</p>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* ARROWS */}
					<button
						onClick={prev}
						className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full shadow hover:scale-110 transition">
						<IoChevronBack />
					</button>

					<button
						onClick={next}
						className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full shadow hover:scale-110 transition">
						<IoChevronForward />
					</button>

					{/* DOTS */}
					<div className="mt-10 flex justify-center gap-3">
						{TESTIMONIALS.map((_, i) => (
							<button
								key={i}
								onClick={() => setActive(i)}
								className={`transition-all duration-300 ${
									i === active ? "w-10 h-2 bg-[#447f80]" : "w-2 h-2 bg-gray-300"
								} rounded-full`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
