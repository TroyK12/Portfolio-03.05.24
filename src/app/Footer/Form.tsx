'use client';
import { sendFormEmail } from './actions';
import React, { useActionState, useEffect, useRef, useState } from 'react';
import FormSubmitButton from './FormSubmitBtn';
import { getCaptchaToken } from '@/helpers/getCaptchaToken';

export default function Form() {
	const [formState, formAction, isPending] = useActionState(sendFormEmail, {
		message: '',
		errors: undefined,
		fieldValues: {
			name: '',
			email: '',
			message: '',
			number: '',
			token: '',
		},
	});

	const [captchaToken, setCaptchaToken] = useState('');
	const [submitError, setSubmitError] = useState('');
	const ref = useRef<HTMLFormElement>(null);

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const token = await getCaptchaToken();
				if (!token) {
					setSubmitError(
						'Security verification failed. Please refresh the page.',
					);
				}
				setCaptchaToken(token ?? '');
			} catch (error) {
				console.error('Captcha token error:', error);
				setSubmitError(
					'Security verification failed. Please refresh the page.',
				);
			}
		};

		fetchToken();
		const interval = setInterval(fetchToken, 2 * 60 * 1000);
		return () => clearInterval(interval);
	}, []);

	const handleSubmit = async (formData: FormData) => {
		if (!captchaToken) {
			setSubmitError('Security verification failed. Please refresh the page.');
			return;
		}
		formData.set('token', captchaToken);

		return formAction(formData);
	};

	useEffect(() => {
		if (formState.message === 'success') {
			ref.current?.reset();
		}
	}, [formState]);

	return (
		<>
			<form
				id="contact"
				ref={ref}
				className="flex flex-col gap-6 w-[80%]"
				action={handleSubmit}>
				<input
					className={`border-b-2 ${
						formState.errors?.name && 'border-b-[#9a1d1d]'
					} bg-transparent outline-none w-full font-mono`}
					type="text"
					name="name"
					placeholder={formState.errors?.name ? formState.errors?.name : 'Name'}
					defaultValue={formState.fieldValues.name}
					maxLength={30}
				/>
				<div className="relative">
					<input
						className={`border-b-2 ${
							formState.errors?.email && 'border-b-[#9a1d1d]'
						} bg-transparent outline-none w-full font-mono`}
						type="text"
						name="email"
						placeholder={
							formState.errors?.email ? formState.errors?.email : 'Email'
						}
						defaultValue={formState.fieldValues.email}
						maxLength={30}
					/>
					<p className="absolute top-0 right-0 font-mono text-[#9a1d1d]">
						{formState.errors?.email !== 'An email is required.' &&
							formState.errors?.email}
					</p>
				</div>
				<div className="relative">
					<input
						className={`border-b-2 ${
							formState.errors?.number && 'border-b-[#9a1d1d]'
						} bg-transparent outline-none w-full font-mono`}
						type="text"
						name="number"
						maxLength={16}
						defaultValue={formState.fieldValues.number}
						placeholder={
							formState.errors?.number
								? formState.errors?.number
								: 'Phone Number'
						}
					/>
					<p className="absolute top-0 right-0 font-mono text-[#9a1d1d]">
						{formState.errors?.number !== 'A phone number is required.' &&
							formState.errors?.number}
					</p>
				</div>
				<textarea
					className={`border-2 ${
						formState.errors?.message && 'border-[#9a1d1d]'
					} bg-transparent outline-none rounded-md w-full p-1 font-mono`}
					name="message"
					maxLength={500}
					placeholder={
						formState.errors?.message
							? formState.errors?.message
							: 'Talk to me!'
					}
					defaultValue={formState.fieldValues.message}
					cols={40}
					rows={10}
				/>
				<button
					className={`relative p-3 ${
						isPending ? 'bg-[#5b6269]' : 'bg-[#99a5b1]'
					} hover:bg-[#5b6269] ease-in-out duration-200 w-[50%] rounded-md m-auto font-thin text-xl flex justify-center items-center gap-3`}
					type="submit"
					disabled={isPending}>
					Send
					{isPending && (
						<>
							ing{' '}
							<div className="animate-spin rounded-full h-4 w-4 border-t-2 border-[#fff]" />
						</>
					)}
				</button>
			</form>
			<p className="text-lg text-center w-full font-mono text-red-500">
				{formState.errors?.token}
			</p>
			<p className="text-lg text-center w-full font-mono text-red-500">
				{submitError}
			</p>
			<p className="text-lg text-center w-full font-mono">
				{formState.message === 'success' &&
					'Your message sent! I look forward to speaking with you soon.'}
			</p>
		</>
	);
}
