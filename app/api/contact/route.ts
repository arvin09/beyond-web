import { NextRequest, NextResponse } from "next/server";
import "dotenv/config";
import { sendMail } from "./util";
import { mailTemplate } from "./mail-template.";

export async function GET(request: NextRequest) {
  return new Response("OK");
}
export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();
  const data:any = mailTemplate(body);

  const info = await sendMail({
    from: `"Goa Beyond" <${process.env.NODEMAILER_EMAIL}>`,
    to: `${process.env.NODEMAILER_EMAIL}, ${process.env.NODEMAILER_EMAIL}`,
    subject: data.subject,
    html: data.html,
  });

  console.log(info);

  return new Response("Success");
}
