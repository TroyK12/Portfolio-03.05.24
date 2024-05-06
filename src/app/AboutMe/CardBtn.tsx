"use client"
import { ComponentProps, useState } from "react";
import About from "../About/About";
import OurServices from "../OurServices/OurServices";

type CardBtnProps = {
    children: React.ReactNode;
    link: string;
} & ComponentProps<"button">;

export default function CardBtn({children, link, ...props}: CardBtnProps) {
    const [isLink, setIsLink] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const toggleCard = () => {
        setIsOpen(!isOpen)
    }

    const openCard = () => {
        setIsLink(link)
    }

    const closeCard = () => {
        setIsLink('')
    }

    return (
        <div>
            {isLink ?
                <button className="w-[40px] h-[40px] absolute bottom-10 left-[45%] z-20" onClick={closeCard}>
                    <div className="w-8 h-[4px] rounded bg-white skew-y-[45deg]" />
                    <div className="w-8 h-[4px] mt-[-3px] rounded bg-white skew-y-[-45deg]" />
                </button> :
                <button
                {...props}
                onClick={() => {
                    if (link === 'contact') {
                        window.location.hash = '#contact'
                    } else {
                        openCard()
                    }
                    }
                }
                    className="w-[90%] h-[50px] rounded-xl border card-btn relative">
                    <div className="absolute top-[-90%] right-[-10px] bg-[#1C2541] px-2 py-1 rounded-xl text-[10px] animate-bounce">Click Below!</div>
                { children } 
            </button>}
           <div className={`absolute top-0 left-0 bg-[#000000f5] leading-7 tracking-widest font-thin transition-all duration-[800ms] ease-in-out w-full ${isLink === 'about' ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}><About /></div>
           <div className={`absolute top-0 left-0 bg-[#000000f5] leading-7 tracking-widest font-thin transition-all duration-[800ms] ease-in-out w-full ${isLink === 'services' ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}><OurServices /></div>
        </div>
    )
}