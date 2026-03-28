import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const data = await req.json();

		const { propertyType, rooms, name, phone, email } = data;

		if (!name || !phone || !email) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		const roomText = Object.entries(rooms || {})
			.map(([key, value]) => `• ${key}: ${value}`)
			.join("\n");

		await resend.emails.send({
			from: "Kasa Interiors <onboarding@resend.dev>", // ⚠️ replace with verified domain later
			to: "kasainteriors23@gmail.com", // ✅ fixed email
			subject: "🔥 New Consultation Request",
			text: `
New Consultation Request

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

🏠 Property Type: ${propertyType || "Not specified"}

🛋 Rooms:
${roomText || "Not specified"}
			`,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Resend Error:", error);

		return NextResponse.json({ error: "Email failed" }, { status: 500 });
	}
}
