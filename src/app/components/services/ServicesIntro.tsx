"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#447f80";

const SERVICE_IMAGES = [
	{
		key: "homes",
		title: "Individual Homes & Villas",
		tag: "Bespoke Residences",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg",
		href: "/services#homes",
	},
	{
		key: "apartments",
		title: "Apartments",
		tag: "Smart City Living",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg",
		href: "/services#apartments",
	},
	{
		key: "commercial",
		title: "Commercial & Offices",
		tag: "Workspaces That Perform",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1764151940/office_tidjvy.jpg",
		href: "/services#commercial",
	},
];

export default function OurServicesBanner() {
	return (
		<section className="relative bg-white py-16 md:py-20 lg:py-24">
			{/* keep same background */}
			<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#447f80]/70 via-white/40 to-white" />

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.3 }}
				transition={{ duration: 0.45, ease: "easeOut" }}
				className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
				{/* HEADER */}
				<div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="inline-flex items-center gap-2 rounded-full border border-[#447f80]/30 bg-white/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#447f80] shadow-sm">
							<span className="h-1.5 w-1.5 rounded-full bg-[#447f80]" />
							Our Services
						</p>

						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
							Interiors for homes, apartments & workspaces.
						</h2>

						<p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
							Explore our core categories – each built around how you live,
							host, and work every day.
						</p>
					</div>

					<Link href="/services">
						<motion.button
							whileHover={{ scale: 1.03, y: -1 }}
							whileTap={{ scale: 0.97 }}
							className="inline-flex items-center gap-2 rounded-full border border-[#447f80] bg-white px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-[#447f80] shadow-md">
							<span>View All Services</span>
							<span className="text-xs">↗</span>
						</motion.button>
					</Link>
				</div>

				{/* CARDS */}
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{SERVICE_IMAGES.map((service, index) => (
						<motion.div
							key={service.key}
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.35 }}
							transition={{
								duration: 0.4,
								ease: "easeOut",
								delay: 0.05 * index,
							}}>
							<Link href={service.href} className="block h-full">
								<motion.article
									whileHover={{ y: -4 }}
									transition={{ type: "spring", stiffness: 220, damping: 20 }}
									className="
                    group flex h-full flex-col overflow-hidden
                    rounded-3xl border border-[#447f80]/20 bg-white
                    shadow-sm hover:shadow-xl transition-shadow
                  ">
									{/* IMAGE TOP */}
									<div className="relative h-44 w-full overflow-hidden">
										<Image
											src={service.image}
											alt={service.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

										{/* label over image */}
										<div className="absolute left-4 bottom-3 flex flex-col gap-1 text-[0.7rem] text-white">
											<span className="inline-flex max-w-full items-center gap-2 rounded-full bg-black/55 px-3 py-1 font-medium backdrop-blur">
												<span
													className="h-1.5 w-1.5 rounded-full"
													style={{ background: ACCENT }}
												/>
												{service.tag}
											</span>
										</div>
									</div>

									{/* TEXT BODY */}
									<div className="flex flex-1 flex-col justify-between px-5 py-5">
										<div>
											<h3 className="text-[1rem] font-semibold text-slate-900">
												{service.title}
											</h3>
											<p className="mt-2 text-[0.86rem] leading-relaxed text-slate-600">
												Tailored layouts, material guidance and complete
												execution from one studio.
											</p>
										</div>

										{/* CTA + bottom bar */}
									</div>
								</motion.article>
							</Link>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
