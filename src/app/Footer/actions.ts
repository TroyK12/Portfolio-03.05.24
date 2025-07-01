'use server';
import { sendEmail } from '@/helpers/mailer';
import { verifyCaptchaToken } from '@/helpers/verifyCaptcha';
import { FormSchema } from '@/models/FormSchema';
import { ZodError } from 'zod';

type Fields = {
	name: string;
	email: string;
	message: string;
	number: string;
	token: string | null;
};

export type FormState = {
	message: string;
	errors: Record<keyof Fields, string> | undefined;
	fieldValues: Fields;
};

export const sendFormEmail = async (
	state: FormState,
	formData: FormData,
): Promise<FormState> => {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;
	const number = formData.get('number') as string;
	const token = formData.get('token') as string;

	try {
		FormSchema.parse({
			name,
			email,
			number,
			message,
			token,
		});
		const captchaData = await verifyCaptchaToken(token);

		if (!captchaData?.success || captchaData.score < 0.5) {
			return {
				message: 'error',
				errors: {
					name: '',
					email: '',
					number: '',
					message: '',
					token: !captchaData?.success
						? (captchaData?.['error-codes'] || []).join(', ')
						: 'Captcha Failed',
				},
				fieldValues: {
					name,
					email,
					number,
					message,
					token,
				},
			};
		}

		await sendEmail({
			name,
			email,
			number,
			message,
		});

		return {
			message: 'success',
			errors: undefined,
			fieldValues: {
				name: '',
				email: '',
				number: '',
				message: '',
				token: '',
			},
		};
	} catch (error: unknown) {
		if (error instanceof ZodError) {
			const errorMap = error.flatten().fieldErrors;

			return {
				message: 'error',
				errors: {
					name: errorMap['name']?.[0] ?? '',
					email: errorMap['email']?.[0] ?? '',
					number: errorMap['number']?.[0] ?? '',
					message: errorMap['message']?.[0] ?? '',
					token: errorMap['token']?.[0] ?? '',
				},
				fieldValues: {
					name,
					email,
					number,
					message,
					token,
				},
			};
		} else {
			console.log('Heres the error: ' + error);
			return {
				message: 'error: ' + error,
				errors: {
					name: '',
					email: '',
					number: '',
					message: '',
					token: '',
				},
				fieldValues: {
					name,
					email,
					number,
					message,
					token,
				},
			};
		}
	}
};
