import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import 'dotenv/config'

export async function GET(request: NextRequest) {
  return new Response('OK');
}

export async function POST(request: NextRequest, response:NextResponse) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PWD,
    },
    secure: true,
  })

  const body = await request.json()

  const mailData = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Enquire for a villa`,
    html: `<b><u>Customer Details</u></b><br><br>
          <b>Name: </b>${body.name}<br>
          <b>Mobile: </b>${body.phone}<br>
            ${body.message}
          <br>
          <hr style="width:50%;text-align:left;margin-left:0"> 
          <b>Regards,</b><br>
          <b>Goa Beyond</b>
          `,
  }

  console.log(mailData)

  // TODO: uncomment when production ready
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log("Email sent", info)
      return true
  })

  return new Response('Success');
}