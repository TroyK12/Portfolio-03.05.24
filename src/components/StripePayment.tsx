'use client';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import CheckoutPage from './CheckoutPage';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
	throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const StripePayment = () => {
	const [amount, setAmount] = useState(0);
	const [submit, setSubmit] = useState(false);

	return (
		<div className="relative max-sm:top-[10%] sm:h-full flex flex-col justify-center items-center overflow-y-scroll">
			<h1 className="text-3xl pb-3">Make a Payment</h1>
			{amount && submit ? (
				<Elements
					stripe={stripePromise}
					options={{
						mode: 'payment',
						amount: convertToSubcurrency(amount),
						currency: 'usd',
					}}>
					<CheckoutPage amount={amount} />
					<button className="pt-3" onClick={() => setSubmit(false)}>
						&larr; Change amount
					</button>
				</Elements>
			) : (
				<div className="flex flex-col items-center gap-5 w-[90%]">
					<div className="flex flex-col gap-2 w-full">
						<label htmlFor="amount" className="font-sans font-light text-white">
							Amount (USD)
						</label>
						<input
							type="number"
							inputMode="decimal"
							name="amount"
							min={1}
							max={100000}
							step="0.01"
							pattern="^[0-9]+(\.[0-9]{1,2})?$"
							placeholder="Enter amount"
							onChange={(e) => setAmount(parseFloat(e.target.value))}
							className="w-full font-sans border-[1px] shadow-md rounded border-[#cecece96] h-[42px] text-black px-2 mb-2 focus:outline-none"
							required
						/>
						<button
							className="hover:scale-[103%] ease-in-out duration-200"
							onClick={() => setSubmit(true)}>
							Confirm
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default StripePayment;
