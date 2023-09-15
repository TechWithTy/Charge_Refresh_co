import { addToMailChimp } from "@/lib/externalRequest/mailChimp";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const { name, email } = await req.json() as unknown as { name: string, email: string }
    await addToMailChimp({ name, email })
    return NextResponse.json({ message: "success" }, { status: 200 })
}