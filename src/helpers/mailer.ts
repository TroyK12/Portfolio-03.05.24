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
    <title>New Cosmic Message</title>
    <style>
        /* Cosmic Gradient Animation */
        @keyframes cosmicBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Base Styles */
        body {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.7;
            color: #e0e0e0;
            margin: 0;
            padding: 0;
            background-color: #0f0f15;
        }
        
        .container {
            max-width: 640px;
            margin: 20px auto;
            padding: 0 20px;
        }
        
        /* Glowing Email Container */
        .email-container {
            background: rgba(15, 15, 25, 0.8);
            border-radius: 24px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            position: relative;
            box-shadow: 0 0 30px rgba(105, 90, 205, 0.3);
        }
        
        /* Header with Animated Stars */
        .header {
            padding: 50px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .logo {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(90deg, #89d2ff, #6e45e2);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: inline-block;
            margin-bottom: 15px;
        }
        
        h1 {
            margin: 0;
            font-size: 36px;
            font-weight: 700;
            background: linear-gradient(90deg, #fff, #89d2ff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: -1px;
        }
        
        /* Message Content */
        .content {
            padding: 40px;
        }
        
        .message-card {
            background: rgba(30, 30, 40, 0.6);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s ease;
        }
        
        .message-card:hover {
            transform: translateY(-5px);
            background: rgba(40, 40, 50, 0.7);
        }
        
        .detail-row {
            margin-bottom: 20px;
        }
        
        .label {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #89d2ff;
            margin-bottom: 8px;
            display: block;
        }
        
        .value {
            font-size: 18px;
            font-weight: 500;
            color: white;
            word-break: break-word;
        }
        
        /* Interactive Elements */
        .action-buttons {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        }
        
        .action-button {
            flex: 1;
            min-width: 120px;
            text-align: center;
            padding: 15px;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .reply-btn {
            background: linear-gradient(135deg, #6e45e2, #89d2ff);
            color: white !important;
        }
        
        .archive-btn {
            background: rgba(255, 255, 255, 0.1);
            color: white !important;
        }
        
        .action-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        /* Priority Indicator */
        .priority-tag {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            margin-left: 10px;
            background: linear-gradient(90deg, #ff4d4d, #f9cb28);
            color: #0f0f15 !important;
        }
        
        /* Footer */
        .footer {
            text-align: center;
            padding: 30px;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.5);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        /* Responsive Adjustments */
        @media (max-width: 600px) {
            .content {
                padding: 30px 20px;
            }
            h1 {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="email-container">
            <div class="header">
                <div class="header-content">
                    <div class="logo">
                    <img src="https://www.troykush.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftk.d5047aa5.png&w=256&q=75" 
                        alt="TK" 
                        width="180" 
                        height="auto" 
                        style="display: block; margin: 0 auto; outline: none; border: 0;"
                    </div>
                    <h1>New Client Message <span class="priority-tag">PRIORITY</span></h1>
                </div>
            </div>
            
            <div class="content">
                <div class="message-card">
                    <div class="detail-row">
                        <span class="label">From</span>
                        <div class="value">${name} <span style="color: #89d2ff;">&lt;${email}&gt;</span></div>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Contact Number</span>
                        <div class="value">${
													number ||
													'<span style="opacity:0.6">Not provided</span>'
												}</div>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Received</span>
                        <div class="value">${new Date().toLocaleString(
													'en-US',
													{
														weekday: 'long',
														year: 'numeric',
														month: 'long',
														day: 'numeric',
														hour: '2-digit',
														minute: '2-digit',
													},
												)}</div>
                    </div>
                    
                    <div class="detail-row" style="margin-top:30px;">
                        <span class="label">Message</span>
                        <div class="value" style="
                            background: rgba(0, 0, 0, 0.2);
                            padding: 20px;
                            border-radius: 12px;
                            border-left: 4px solid #6e45e2;
                            line-height: 1.8;
                        ">${message}</div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <a href="mailto:${email}" class="action-button reply-btn">✉️ Reply Directly</a>
                    
                </div>
            </div>
            
            <div class="footer">
                <p>This message was sent from your website's contact form</p>
                <p>© ${new Date().getFullYear()} TMK. All rights reserved.</p>
            </div>
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
