"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';
import ohey from '@/assets/ohey.png'

export default function MenuBars() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuHover, setIsMenuHover] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    function closeDropdown() {
        setIsMenuOpen(false)
      }

    const hoverMenu = () => {
        setIsMenuHover(!isMenuHover);
    }
    function leaveHoverMenu() {
        setIsMenuHover(false)
      }

    

    return (
        <div className="flex items-center flex-col">
            <button
                onClick={toggleMenu}
                onMouseEnter={hoverMenu}
                onMouseLeave={leaveHoverMenu}
                className={`z-50 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'} flex flex-col items-end`}>
                <div className={`bg-white h-[3px] rounded-md w-[40px] ${isMenuOpen ? 'mt-[-2px]' : 'mt-[10px]'} ease-in-out transform ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`} />
                {!isMenuOpen && <div className={`bg-white h-[3px] ${isMenuHover ? 'w-[120%]' :'w-[70%]'} transition-all duration-500 ease-in-out rounded-md mt-[10px]`} />}
                <div className={`bg-white h-[3px] rounded-md w-[40px] ${isMenuOpen ? 'mt-[-2px]' : 'mt-[10px]'} ease-in-out transform ${isMenuOpen ? 'rotate-[135deg]' : 'rotate-0'}`} />
            </button>

            <div className={`absolute top-0 right-0 flex text-2xl md:text-3xl font-light bg-[#0B132B] p-10 z-20 shadow-xl overflow-hidden transition-all duration-[800ms] ease-in-out ${isMenuOpen ? 'h-screen w-screen opacity-100' : 'h-0 w-0 opacity-0'}`}> 
                <div className="w-0 md:w-[70vw] h-full hidden md:flex justify-center items-center ml-16">
                    <div className="ohey-img bg-[#ffffffb8] p-5 rounded-xl">
                        <Image src={ohey} alt='Oh Hey!' width={500} height={500} />
                    </div>
                </div>
                <div className="flex flex-col justify-around items-end w-full">
                    <ul className='cursor-pointer tracking-widest h-[50vh] flex flex-col items-end justify-evenly'>
                        <li className="link-hover"><Link onClick={closeDropdown} href="/">Home</Link></li>
                        <li className="link-hover"><Link onClick={closeDropdown} href="#projects">Projects</Link></li>
                        <li className="link-hover"><Link onClick={closeDropdown} href="#aboutMe">About Me</Link></li>
                        <li className="link-hover"><Link onClick={closeDropdown} href="#contact">Contact</Link></li>
                    </ul>
                    <div className="flex flex-col items-end gap-2">
                        <Link href='tel:2185764997'>(218) 576-4997</Link>
                        <Link href='mailto:troykush@gmail.com'>troykush@gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
