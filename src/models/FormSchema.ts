import { z } from 'zod';

export const FormSchema = z.object({
    name: z.string().min(1, 'Your name is required.'),
    email: z.string().email({ message: 'Invalid email.' }),
    number: z.string().regex(/^[0-9]{10}$/, { message: "Invalid phone number" }),
    message: z.string().min(1, 'A message is required.'),
    pizza: z.string().max(0),
})