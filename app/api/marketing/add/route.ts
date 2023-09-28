import { addToSendGrid } from "@/lib/externalRequest/sendgrid";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const { name, email } = await req.json() as unknown as { name: string, email: string }
    const res = await addToSendGrid({ name, email })
    if (res === 202) return NextResponse.json({ message: "success" }, { status: 200 })
    else return NextResponse.json({ message: "error occuer while adding:" }, { status: 500 })
}

