import { contactForm, sendMail } from "@/lib/externalRequest/sendgrid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {

    const { message, email } = await req.json() as { message: string, email: string }
    const res = await contactForm(email, message)
    if (res === 202) return NextResponse.json({ message: "success" }, { status: 200 })
    else return NextResponse.json({ message: "error occuer while adding:" }, { status: 500 })
}

