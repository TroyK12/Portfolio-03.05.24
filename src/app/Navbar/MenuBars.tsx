"use client"
import Link from "next/link"
import { useState } from 'react';

export default function MenuBars() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeDropdown() {
        setIsMenuOpen(false)
      }

    return (
        <div className="flex items-center flex-col">
            <button
                onClick={toggleMenu}
                className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                <div className={`bg-white h-[3px] rounded-md w-[30px] ${isMenuOpen ? 'mt-[-2px]' : 'mt-[5px]'} ease-in-out transform ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`} />
                <div className={`bg-white h-[3px] rounded-md w-[30px] ${isMenuOpen ? 'mt-[-2px]' : 'mt-[5px]'} ease-in-out transform ${isMenuOpen ? 'rotate-[135deg]' : 'rotate-0'}`} />
                {!isMenuOpen && <div className="bg-white h-[3px] w-[23px] rounded-md mt-[5px]" />}
            </button>

            <div className={`absolute top-24 left-0 w-screen bg-[#99a5b1ed] p-5 z-[1] shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}> 
                <ul className='cursor-pointer font-light text-xl tracking-widest space-y-5'>
                    <li className="transition duration-300 ease-in-out transform hover:scale-105"><Link onClick={closeDropdown} href="#projects">Projects</Link></li>
                    <li className="transition duration-300 ease-in-out transform hover:scale-105"><Link onClick={closeDropdown} href="#aboutMe">About Me</Link></li>
                    <li className="transition duration-300 ease-in-out transform hover:scale-105"><Link onClick={closeDropdown} href="#contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
