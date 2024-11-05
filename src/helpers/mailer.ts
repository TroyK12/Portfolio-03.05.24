import { env } from '@/lib/env';
import formatCurrency from '@/lib/formatCurrency';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface confirmationEmailProps {
	name: string;
	email: string;
	product: string;
	amount: number;
	originalAmount: number;
	fee: number;
}

export async function sendEmail({ name, email, number, message }: any) {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: env.EMAIL,
				pass: env.PASSWORD,
			},
		});

		const mailOption = {
			from: email,
			to: 'troykush@gmail.com',
			subject: 'Message Form Portfolio',
			html: `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1b1b1b;
            color: #f39c12;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #2c3e50;
            border-radius: 5px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            border: 1px solid #34495e;
        }
        .header {
            background-color: #2980b9;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            letter-spacing: 1px;
        }
        .content {
            padding: 30px;
        }
        .content p {
            line-height: 1.6;
            color: #f39c12;
        }
        .footer {
            background-color: #34495e;
            text-align: center;
            padding: 15px;
            font-size: 14px;
        }
        .footer a {
            color: #1abc9c;
            text-decoration: none;
        }
        .info {
            margin: 20px 0;
            padding: 15px;
            background: #34495e;
            border-left: 5px solid #1abc9c;
            border-radius: 8px;
        }
        .highlight {
            color: #f39c12;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <p>You've received a new message from your contact form!</p>
            <div class="info">
                <strong>Name:</strong> <span class="highlight">${name}</span><br>
                <strong>Email:</strong> <a href="mailto:${email}" style="color: #1abc9c;">${email}</a><br>
                <strong>Phone Number:</strong> <span class="highlight">${number}</span><br>
            </div>
            <p><strong class="highlight">Message:</strong></p>
            <p>${message}</p>
            <p>Thank you for following up!</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 TKM. All Rights Reserved.</p>
            <p><a href="https://troykush.com">Visit Our Website</a></p>
        </div>
    </div>
</body>
</html>

`,
		};

		await transporter.sendMail(mailOption);

		return NextResponse.json({ message: 'Email Sent!' }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Email Failed to Send, Check your entry' },
			{ status: 500 },
		);
	}
}

function addCommas(number: number) {
	return new Intl.NumberFormat('en-US').format(number);
}

export async function confirmationEmail({
	name,
	email,
	product,
	amount,
	originalAmount,
	fee,
}: confirmationEmailProps) {
	try {
		if (!email || !amount) {
			return;
		}

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: env.EMAIL,
				pass: env.PASSWORD,
			},
		});

		const formatOriginalAmount = formatCurrency(originalAmount);
		const formattedAmount = formatCurrency(amount);

		const mailOption = {
			from: email,
			to: 'troykush@gmail.com',
			subject: 'Payment Made from Portfolio',
			html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #e9ecef;
                        font-family: 'Arial', sans-serif;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                    }
                    .header {
                        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                        color: #ffffff;
                        padding: 40px 20px;
                        text-align: center;
                        position: relative;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 36px;
                        letter-spacing: 1.5px;
                        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
                    }
                    .header::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 10px;
                        background: rgba(255, 255, 255, 0.2);
                        bottom: 0;
                        left: 0;
                    }
                    .content {
                        padding: 30px;
                        color: #343a40;
                    }
                    .content h2 {
                        font-size: 28px;
                        margin-bottom: 15px;
                        color: #1e3a8a;
                    }
                    .content p {
                        margin: 10px 0;
                        line-height: 1.6;
                        color: #495057;
                    }
                    .order-summary {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .order-summary th,
                    .order-summary td {
                        border: 1px solid #dee2e6;
                        text-align: left;
                        padding: 12px;
                    }
                    .order-summary th {
                        background: #1e3a8a;
                        color: #ffffff;
                        font-weight: bold;
                    }
                    .order-summary tbody tr:hover {
                        background-color: #f1f9ff;
                    }
                    .order-summary .total-row {
                        background: #f8f9fa;
                        font-weight: bold;
                    }
                    .footer {
                        background-color: #343a40;
                        padding: 20px;
                        text-align: center;
                        color: #ffffff;
                        position: relative;
                    }
                    .footer p {
                        margin: 5px 0;
                        font-size: 14px;
                    }
                    .footer a {
                        color: #3b82f6;
                        text-decoration: none;
                    }
                    .footer a:hover {
                        text-decoration: underline;
                    }
                    .highlight {
                        color: #3b82f6;
                        font-weight: bold;
                    }
                    @media (max-width: 600px) {
                        .content {
                            padding: 20px;
                        }
                        .header h1 {
                            font-size: 30px;
                        }
                        .content h2 {
                            font-size: 24px;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Client Payment Confirmation</h1>
                    </div>
                    <div class="content">
                        <h2>Here is their purchase</h2>
                        <p><strong>Customer Name:</strong> <span class="highlight">${name}</span></p>
                        <p><strong>Email:</strong> <span class="highlight">${email}</span></p>
                        <p><strong>Order Date:</strong> <span class="highlight">${new Date().toLocaleDateString()}</span></p>
            
                        <h3>Order Summary</h3>
                        <table class="order-summary">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${product}</td>
                                    <td class="highlight">${formattedAmount}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="total-row">
                                    <td><strong>Total:</strong></td>
                                    <td class="highlight"><strong>${formattedAmount}</strong></td>
                                </tr>
                            </tfoot>
                        </table>
            
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} TKM. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            
            `,
		};

		const mailOptionToClient = {
			from: 'troykush@gmail.com',
			to: email,
			subject: 'Payment Confirmation',
			html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #e9ecef;
                        font-family: 'Arial', sans-serif;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                    }
                    .header {
                        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                        color: #ffffff;
                        padding: 40px 20px;
                        text-align: center;
                        position: relative;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 36px;
                        letter-spacing: 1.5px;
                        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
                    }
                    .header::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 10px;
                        background: rgba(255, 255, 255, 0.2);
                        bottom: 0;
                        left: 0;
                    }
                    .content {
                        padding: 30px;
                        color: #343a40;
                    }
                    .content h2 {
                        font-size: 28px;
                        margin-bottom: 15px;
                        color: #1e3a8a;
                    }
                    .content p {
                        margin: 10px 0;
                        line-height: 1.6;
                        color: #495057;
                    }
                    .order-summary {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .order-summary th,
                    .order-summary td {
                        border: 1px solid #dee2e6;
                        text-align: left;
                        padding: 12px;
                    }
                    .order-summary th {
                        background: #1e3a8a;
                        color: #ffffff;
                        font-weight: bold;
                    }
                    .order-summary tbody tr:hover {
                        background-color: #f1f9ff;
                    }
                    .order-summary .total-row {
                        background: #f8f9fa;
                        font-weight: bold;
                    }
                    .footer {
                        background-color: #343a40;
                        padding: 20px;
                        text-align: center;
                        color: #ffffff;
                        position: relative;
                    }
                    .footer p {
                        margin: 5px 0;
                        font-size: 14px;
                    }
                    .footer a {
                        color: #3b82f6;
                        text-decoration: none;
                    }
                    .footer a:hover {
                        text-decoration: underline;
                    }
                    .highlight {
                        color: #3b82f6;
                        font-weight: bold;
                    }
                    @media (max-width: 600px) {
                        .content {
                            padding: 20px;
                        }
                        .header h1 {
                            font-size: 30px;
                        }
                        .content h2 {
                            font-size: 24px;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Payment Confirmation</h1>
                    </div>
                    <div class="content">
                        <h2>Thank you for your purchase!</h2>
                        <p><strong>Customer Name:</strong> <span class="highlight">${name}</span></p>
                        <p><strong>Email:</strong> <span class="highlight">${email}</span></p>
                        <p><strong>Order Date:</strong> <span class="highlight">${new Date().toLocaleDateString()}</span></p>
            
                        <h3>Order Summary</h3>
                        <table class="order-summary">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${product}</td>
                                    <td class="highlight">$${addCommas(
																			originalAmount,
																		)}</td>
                                </tr>
                                <tr>
                                    <td>3% Fee</td>
                                    <td class="highlight">$${fee.toFixed(
																			2,
																		)}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="total-row">
                                    <td><strong>Total:</strong></td>
                                    <td class="highlight"><strong>${formattedAmount}</strong></td>
                                </tr>
                            </tfoot>
                        </table>
            
                        <p>If you have any questions about this transaction, please contact us at <a href="mailto:troykush@gmail.com">troykush@gmail.com</a>.</p>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} TKM. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            

            `,
		};

		await transporter.sendMail(mailOption);
		await transporter.sendMail(mailOptionToClient);

		return NextResponse.json({ message: 'Email Sent!' }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: 'Email Failed to Send, Check your entry' },
			{ status: 500 },
		);
	}
}
