import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const data = await req.json();

		const { propertyType, rooms, name, phone, email } = data;

		const roomText = Object.entries(rooms)
			.map(([k, v]) => `${k}: ${v}`)
			.join("\n");

		const res = await resend.emails.send({
			from: "Kasa Interiors <onboarding@resend.dev>",
			to: "kasainteriors23@gmail.com", // 🔴 change this
			subject: "New Consultation Request",
			text: `
New Consultation Request

Name: ${name}
Phone: ${phone}
Email: ${email}

Property Type: ${propertyType}

Rooms:
${roomText}
      `,
		});
		console.log("Email sent:", res);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Email failed" }, { status: 500 });
	}
}
