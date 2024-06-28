import { env } from '@/lib/env';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function sendEmail({ name, email, number, message }: any) {
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.EMAIL,
                pass: env.PASSWORD
            }
        })

        const mailOption = {
            from: email,
            to: 'troykush@gmail.com',
            subject: "Message Form Portfolio",
            html: `
            Name: ${name} <br />
            Email: ${email} <br /> 
            Phone Number: ${number} <br />
            What they said in the textbox: ${message}`}

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Email Failed to Send, Check your entry" }, { status: 500 })
    }
}