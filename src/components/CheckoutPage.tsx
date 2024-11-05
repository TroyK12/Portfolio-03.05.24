'use client';

import React, { useEffect, useState } from 'react';
import {
	useStripe,
	useElements,
	PaymentElement,
} from '@stripe/react-stripe-js';
import convertToSubcurrency from '@/lib/convertToSubcurrency';

const CheckoutPage = ({ amount }: { amount: number }) => {
	const stripe = useStripe();
	const elements = useElements();

	const [errorMessage, setErrorMessage] = useState<string>();
	const [clientSecret, setClientSecret] = useState('');
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [product, setProduct] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch('/api/create-payment-intent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				amount: convertToSubcurrency(amount),
				email,
				name,
				product,
				paymentSuccess,
			}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [loading]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setLoading(true);

		if (!stripe || !elements) {
			return;
		}

		const { error: submitError } = await elements.submit();

		if (submitError) {
			setErrorMessage(submitError.message);
			setLoading(false);
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			clientSecret,
			confirmParams: {
				return_url: `https://troykush.com/#payment-success?amount=${amount}`,
			},
			redirect: 'if_required',
		});

		if (error) {
			setErrorMessage(error.message);
			return;
		}

		setPaymentSuccess(true);
		setLoading(false);
	};

	if (!clientSecret || !stripe || !elements) {
		return (
			<div className="flex items-center justify-center">
				<div
					className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
					role="status">
					<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
						Loading...
					</span>
				</div>
			</div>
		);
	}

	function addCommas(number: number) {
		return new Intl.NumberFormat('en-US').format(number);
	}

	if (paymentSuccess) {
		const formatedAmount = addCommas(amount);

		return (
			<div
				className={`absolute z-[1000] flex flex-col top-[45%] w-full py-16 bg-gradient-to-r from-[#333] to-[#222222]`}>
				<h1 className="text-center pb-4 text-lg">Thank you!</h1>
				<p className="text-center text-sm">
					Payment amount of <br />{' '}
					<span className="text-base font-semibold color-animation">
						${formatedAmount}
					</span>{' '}
					<br /> was made.
				</p>
				<button
					onClick={() => window.location.reload()}
					className="text-xs self-center font-mono mt-3 border-[1px] p-1 rounded hover:invert hover:bg-black">
					Make another payment &#8594;
				</button>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="p-5 rounded-md w-[95%] md:w-[60%] payment-shadow bg-gradient-to-tr from-[#3b83f663] to-[#a955f763]">
			{errorMessage && <div>{errorMessage}</div>}
			{clientSecret && (
				<>
					<PaymentElement />
					<label htmlFor="name" className="font-sans font-light text-[#333]">
						Name
					</label>
					<input
						type="text"
						name="name"
						placeholder="John Doe"
						onChange={(e) => setName(e.target.value)}
						className="w-full font-sans border-[1px] shadow-md rounded border-[#cecece96] h-[42px] text-black px-2 focus:outline-none"
						required
					/>

					<label htmlFor="email" className="font-sans font-light text-[#333]">
						Email
					</label>
					<input
						type="text"
						name="email"
						placeholder="my-email@email.com"
						onChange={(e) => setEmail(e.target.value)}
						className="w-full font-sans border-[1px] shadow-md rounded border-[#cecece96] h-[42px] text-black px-2 focus:outline-none"
						required
					/>
					<label htmlFor="product" className="font-sans font-light text-[#333]">
						What For
					</label>
					<input
						type="text"
						name="product"
						placeholder="Website Development"
						onChange={(e) => setProduct(e.target.value)}
						className="w-full font-sans border-[1px] shadow-md rounded border-[#cecece96] h-[42px] text-black px-2 focus:outline-none"
						required
					/>
				</>
			)}

			<button
				disabled={!stripe || loading}
				className="text-white w-full p-5 bg-[#191919] hover:bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse">
				{!loading ? `Pay $${amount ? amount.toFixed(2) : 0}` : 'Processing...'}
			</button>
		</form>
	);
};

export default CheckoutPage;
