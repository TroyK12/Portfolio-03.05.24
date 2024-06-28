"use client"
import { sendFormEmail } from "./actions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import FormSubmitButton from "./FormSubmitBtn";

export default function Form() {
    const [formState, formAction] = useFormState(sendFormEmail, {
        message: '',
        errors: undefined,
        fieldValues: {
            name: '',
            email: '',
            message: '',
            number: '',
        }
    })

    const ref = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (formState.message === 'success') {
            ref.current?.reset()
        }
    }, [formState])

    return (
        <>
            <form id="contact" className="flex flex-col gap-6 w-[80%]" action={formAction}>
                <input
                    className={`border-b-2 ${formState.errors?.name && 'border-b-[#9a1d1d]'} bg-transparent outline-none w-full`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    maxLength={30}/>
                <input
                    className={`border-b-2 ${formState.errors?.email && 'border-b-[#9a1d1d]'} bg-transparent outline-none w-full`}
                    type="text"
                    name="email"
                    placeholder="Email"
                    maxLength={30}/>
                <input
                    className={`border-b-2 ${formState.errors?.number && 'border-b-[#9a1d1d]'} bg-transparent outline-none w-full`}
                    type="text"
                    name="number"
                    maxLength={20}
                    placeholder="Phone Number"/>
                <textarea
                    className={`border-2 ${formState.errors?.message && 'border-[#9a1d1d]'} bg-transparent outline-none rounded-md w-full p-1`}
                    name="message"
                    maxLength={200}
                    placeholder="Talk to me!"
                    cols={40}
                    rows={10}/>
                <input
                    type='hidden'
                    name="favoritefood"
                />
                <FormSubmitButton className="p-3 bg-[#99a5b1] hover:bg-[#5b6269] ease-in-out duration-200 w-[50%] rounded-md m-auto font-thin text-xl flex justify-center">Send!</FormSubmitButton>
            </form>
            <p className="text-lg text-center w-full text-red-500">{ formState.message === 'error' && formState.errors?.name || formState.errors?.email || formState.errors?.number || formState.errors?.message }</p>
            <p className="text-lg text-center w-full playfair">{ formState.message === 'success' && "Your message sent! I look forward to speaking with you soon." }</p>
        </>
    )
}