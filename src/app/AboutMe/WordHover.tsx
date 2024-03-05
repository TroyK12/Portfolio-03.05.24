'use client'
import { useState } from "react"

export default function Paragraph({ id, content, children }: any) {
    const [isHover, setIsHover] = useState(false)

    return (
        <span
            id={id}
            className="relative underline cursor-pointer font-normal"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {children}
            <span className={`absolute z-30 w-[50vw] sm:w-[25vw] top-[21px] right-0 text-sm md:text-xl p-3 bg-[#515960] shadow-lg rounded-md font-thin transition-all duration-1000 ${isHover ? 'opacity-100 visible' : 'opacity-0 invisible'} ease-in-out`}>{content}</span>
        </span>
    )
}