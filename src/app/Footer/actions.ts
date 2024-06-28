'use server'
import { sendEmail } from "@/helpers/mailer";
import { FormSchema } from "@/models/FormSchema";

type Fields = {
    name: string,
    email: string,
    message: string,
    number: string,
}

export type FormState = {
    message: string;
    errors: Record<keyof Fields, string> | undefined;
    fieldValues: Fields;
}

export const sendFormEmail = async (state: FormState, formData: FormData): Promise<FormState> => {

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const number = formData.get('number') as string;
    const pizza = formData.get('favoritefood') as string;


    try {        
        const result = FormSchema.parse({
            name,
            email,
            number,
            message,
            pizza
        })

        await sendEmail({
            name: result.name,
            email: result.email,
            number: result.number,
            message: result.message,
        })
    
        return { 
            message: "success",
            errors: undefined,
            fieldValues: {
                name: '',
                email: '',
                number: '',
                message: '',
            }
        }
    } catch (error: any) {
        const errorMap = error.flatten().fieldErrors

        return {
            message: "error",
            errors: {
                name: errorMap["name"]?.[0] ?? "",
                email: errorMap["email"]?.[0] ?? "",
                number: errorMap["number"]?.[0] ?? "",
                message: errorMap["message"]?.[0] ?? "",
            },
            fieldValues: {
                name,
                email,
                number,
                message,
            }
        }
    }

}