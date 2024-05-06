"use client"
import { useState } from "react";
import FormSubmitButton from "./FormSubmitBtn";

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('')
    const [sentResponse, setSentResponse] = useState('')
    const [favoriteFood, setFavoriteFood] = useState('')

    const isValidEmail = (emails: any) => {
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailReg.test(emails);
      };

    const sendMail = async () => {
        if (favoriteFood !== '') {
            setSentResponse('Invalid Entry');
            return;
        }

        if (!isValidEmail(email)) {
            setSentResponse('Invalid Email');
            return;
        }

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                number,
                message
            })
        })
            
        const res = await response.json()
        setSentResponse(await res.message)
            
        setName('')
        setEmail('')
        setNumber('')
        setMessage('')
    }

    return (
        <form id="contact" className="flex flex-col gap-6 w-[80%]" action={sendMail}>
            <input
                className="border-b-2 bg-transparent outline-none w-full"
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                maxLength={30}
                required />
            <input
                className="border-b-2 bg-transparent outline-none w-full"
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                minLength={6}
                maxLength={30}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required />
            <input
                className="border-b-2 bg-transparent outline-none w-full"
                type="text"
                name="number"
                value={number}
                onChange={e => setNumber(e.target.value)}
                pattern="[0-9]*"
                minLength={9}
                maxLength={20}
                placeholder="Phone Number"
                required />
            <textarea
                className="border-2 bg-transparent outline-none rounded-md w-full p-1"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                minLength={2}
                maxLength={200}
                placeholder="Talk to me!"
                cols={40}
                rows={10}
                required />
            <input
                type='hidden'
                name="favorite_food"
                value={favoriteFood}
                onChange={e => setFavoriteFood(e.target.value)}
            />
            <FormSubmitButton className="p-3 bg-[#99a5b1] w-[50%] rounded-md m-auto font-thin text-xl flex justify-center">Send!</FormSubmitButton>
            <div className={`w-1/4 text-center p-4 rounded-2xl bg-slate-600 m-auto transform-all ease-in-out duration-[3s] ${sentResponse ? 'opacity-1 -translate-y-52' : 'opacity-0 translate-y-0'}`}>{ sentResponse }</div>
        </form>
    )
}