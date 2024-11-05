import { confirmationEmail } from '@/helpers/mailer';
import { NextRequest, NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
	try {
		const { amount, email, name, product, paymentSuccess } =
			await request.json();

		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'usd',
			automatic_payment_methods: { enabled: true },
		});

		if (paymentIntent && email && paymentSuccess) {
			await confirmationEmail({ email, amount, name, product });
		}

		return NextResponse.json({ clientSecret: paymentIntent.client_secret });
	} catch (error) {
		console.error('Internal Error:', error);

		return NextResponse.json(
			{ error: `Internal Server Error: ${error}` },
			{ status: 500 },
		);
	}
}
