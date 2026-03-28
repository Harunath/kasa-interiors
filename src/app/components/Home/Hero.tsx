"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const slides = [
	{
		id: 0,
		title: `YOUR HOME. YOUR STORY. OUR DESIGN`,
		subtitle:
			"We design interiors that feel personal, warm, and unforgettable.",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg",
	},
	{
		id: 1,
		title: `DESIGNS THAT FEEL LIKE YOU`,
		subtitle:
			"Modern, functional and timeless interiors built around your lifestyle.",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg",
	},
	{
		id: 2,
		title: `SPACES THAT INSPIRE EVERY DAY`,
		subtitle:
			"Elegant workspaces & commercial interiors that elevate your brand.",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/Int-Gallery-6_itxrkt.jpg",
	},
];

const textReveal: Variants = {
	hidden: { y: "40%", opacity: 0 },
	visible: {
		y: "0%",
		opacity: 1,
		transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
	},
	exit: {
		y: "40%",
		opacity: 0,
		transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
	},
};

export default function HeroBanner() {
	const [index, setIndex] = useState(0);
	const [showText, setShowText] = useState(true);
	const sliderRef = useRef<Slider | null>(null);

	const current = slides[index];

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 1400,
		fade: true,
		arrows: false,
		pauseOnHover: false,
		beforeChange: (_: number, next: number) => setIndex(next),
	};

	useEffect(() => {
		setShowText(false);
		const timeout = setTimeout(() => setShowText(true), 700);
		return () => clearTimeout(timeout);
	}, [index]);

	return (
		<section
			className="
				relative w-full 
				min-h-[70vh]
				sm:min-h-[80vh]
				md:min-h-dvh
				overflow-hidden
			">
			{/* Background Slider */}
			<div className="absolute inset-0 z-0">
				<Slider
					ref={sliderRef}
					{...settings}
					className="h-[70vh] sm:h-[80vh] md:h-dvh">
					{slides.map((slide) => (
						<div key={slide.id} className="h-[70vh] sm:h-[80vh] md:h-dvh">
							<div className="relative h-full w-full">
								<Image
									src={slide.image}
									alt={slide.title}
									fill
									sizes="100vw"
									priority={slide.id === 0}
									className="object-cover"
								/>
							</div>
						</div>
					))}
				</Slider>
			</div>

			{/* Content */}
			<div
				className="
					relative z-20 flex 
					min-h-[70vh] 
					sm:min-h-[80vh] 
					md:min-h-dvh
					items-center 
					px-6 py-16 
					sm:px-10 
					md:px-20 
					lg:px-32
				">
				<AnimatePresence mode="wait" initial={false}>
					{showText && (
						<motion.div
							key={current.id}
							variants={textReveal}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="relative max-w-xl text-left p-5 rounded-2xl overflow-hidden">
							<p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-white drop-shadow-lg">
								Kasa Interiors
							</p>

							<h1 className="text-3xl font-bold leading-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl">
								{current.title}
							</h1>

							<p className="mt-4 max-w-lg text-sm text-white/90 drop-shadow-md sm:text-base md:text-lg">
								{current.subtitle}
							</p>

							{/* ✅ BUTTON → REDIRECTS TO GALLERY */}
							<Link href="/gallery">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.96 }}
									className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-[#447f80] hover:text-white transition">
									See Our Latest Makeovers →
								</motion.button>
							</Link>

							{/* subtle overlay */}
							<div className="absolute inset-0 bg-black/5 pointer-events-none" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Right Side Dots */}
			<div className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2 sm:right-6">
				{slides.map((s, i) => (
					<button
						key={s.id}
						onClick={() => sliderRef.current?.slickGoTo(i)}
						className={`h-2.5 w-2.5 rounded-full transition ${
							i === index
								? "bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.4)]"
								: "bg-white/50 hover:bg-white/80"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
