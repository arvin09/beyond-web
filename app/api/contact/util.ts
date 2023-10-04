import nodemailer from "nodemailer";
import "dotenv/config";

type messageProp = {
    from: string,
    to: string,
    subject: string,
    html: string
}

export async function sendMail({from, to, subject, html}: messageProp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PWD,
    },
    secure: true,
  });

  return transporter.sendMail({from, to, subject, html});
}
