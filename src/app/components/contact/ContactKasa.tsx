"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";

const ACCENT = "#447f80";
const HERO_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg";

export default function ContactKasa() {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: `${form.firstName} ${form.lastName}`,
					email: form.email,
					phone: form.phone,
					propertyType: "General Inquiry",
					rooms: { message: form.message },
				}),
			});

			const data = await res.json();

			if (!res.ok) throw new Error(data.error);

			alert("Message sent successfully ✅");

			setForm({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: "",
			});
		} catch (err: any) {
			alert(err.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w-full bg-linear-to-b from-white via-[#f6f9f9] to-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				{/* GRID START */}
				{/* TOP HEADING (RESTORED EXACTLY) */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-14 text-center">
					<div className="relative mx-auto mb-3 h-6 w-6 rounded-full bg-[#447f80]/15 blur-sm" />

					<p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-500">
						Contact
					</p>

					<h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]">
						Let’s plan your next interior project.
					</h1>

					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
						Visit our studio, call us directly, or send a message with your
						project details. We’ll get back with timelines, process and clarity.
					</p>

					<div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-linear-to-r from-[#95c7c6] via-[#6aa3a2] to-[#447f80]" />
				</motion.div>
				<motion.div className="grid gap-10 lg:grid-cols-2 lg:items-center">
					{/* LEFT – EXACT SAME */}
					<div className="relative h-[360px] sm:h-[420px] rounded-4xl overflow-hidden shadow-[0_18px_55px_rgba(0,0,0,0.12)]">
						<Image
							src={HERO_URL}
							alt="Kasa Interiors Project"
							fill
							className="object-cover"
							priority
						/>

						<div className="absolute inset-0 bg-linear-to-t from-white/70 via-white/40 to-transparent" />

						<div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/60 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] px-6 py-5 sm:px-7 sm:py-6 border border-white/50">
							<h2 className="text-xl font-semibold text-slate-900">
								Kasa Interiors Studio
							</h2>
							<p className="mt-2 text-[0.9rem] text-slate-700 leading-relaxed">
								Flat No. 301, Grecious Homes,
								<br />
								Mytri Nagar, Madinaguda,
								<br />
								Miyapur, Hyderabad – 500049
								<br />
								Telangana, India
							</p>

							<p className="mt-3 text-[0.8rem] text-slate-600">
								Studio visits are by appointment. We’ll walk you through
								materials, finishes & layouts.
							</p>
						</div>
					</div>

					{/* RIGHT – SAME UI, ONLY LOGIC ADDED */}
					<div className="relative rounded-4xl bg-white/60 backdrop-blur-xl p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)] border border-white/50 sm:p-8">
						<h2 className="text-xl font-semibold text-slate-900 sm:text-[1.45rem]">
							Send us a Message
						</h2>

						<p className="mt-2 text-[0.9rem] text-slate-600">
							Share a few details about your space—we'll help you take the next
							step.
						</p>

						<form onSubmit={handleSubmit} className="mt-6 space-y-4">
							<div className="grid gap-4 sm:grid-cols-2">
								<input
									name="firstName"
									value={form.firstName}
									onChange={handleChange}
									type="text"
									placeholder="First Name"
									className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#447f80]"
								/>
								<input
									name="lastName"
									value={form.lastName}
									onChange={handleChange}
									type="text"
									placeholder="Last Name"
									className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#447f80]"
								/>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								<input
									name="email"
									value={form.email}
									onChange={handleChange}
									type="email"
									placeholder="you@example.com"
									className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#447f80]"
								/>
								<input
									name="phone"
									value={form.phone}
									onChange={handleChange}
									type="tel"
									placeholder="10-digit mobile"
									className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#447f80]"
								/>
							</div>

							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								rows={4}
								placeholder="Tell us about your project..."
								className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#447f80]"
							/>

							<button
								type="submit"
								disabled={loading}
								className="mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#84c1bf] via-[#5d9e9c] to-[#447f80] px-8 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:opacity-90">
								<FiArrowRight className="h-4 w-4" />
								{loading ? "Sending..." : "Send"}
							</button>
						</form>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
