import Link from "next/link"
import MenuBars from "./MenuBars"

export default function Navbar() {
    return (
        <div className='fixed w-screen h-36 flex flex-row items-center justify-between px-10 z-40'>
            <div>
                <h1 className="font-bold text-xl tracking-widest px-3"><Link href="/">Troy Kush</Link></h1>
                <div className="flex items-center">
                    <div className="h-[2px] w-[165px] bg-white mt-[3px] absolute left-10 top-[83px]" />
                    <div className="absolute left-8">&gt;</div>
                    <div className="absolute left-10">&gt;</div>
                    <div className="absolute left-12">&gt;</div>
                    <div className="absolute left-[198px]">&gt;</div>
                </div>
            </div>
            <ul className="hidden sm:flex gap-8 sm:gap-5 md:gap-10 font-light text-md md:text-lg tracking-widest">
                <li className="link-hover"><Link href="#projects">Projects</Link></li>
                <li className="link-hover"><Link href="#aboutMe">About Me</Link></li>
                <li className="link-hover"><Link href="#contact">Contact Me!</Link></li>
            </ul>
            <div className="sm:hidden">
                <MenuBars />
            </div>
        </div>
    )
}