import { z } from 'zod';

export const FormSchema = z.object({
	name: z.string().min(1, 'Your name is required.'),
	email: z
		.string()
		.min(1, 'An email is required.')
		.email({ message: 'Invalid email.' }),
	number: z
		.string()
		.min(1, 'A phone number is required.')
		.regex(/^[0-9]{10}$/, { message: 'Invalid phone number' }),
	message: z.string().min(1, 'A message is required.'),
	token: z.string().min(5, 'Captcha is not aquired'),
});
