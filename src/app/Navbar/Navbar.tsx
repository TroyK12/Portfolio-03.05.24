"use client"
import styles from './nav.module.css';
import Link from "next/link"
import { useState } from 'react';
import Image from "next/image"
import tk from '@/assets/tk.png'
import usePageOnTop from "@/utils/usePageOnTop";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuHover, setIsMenuHover] = useState(false);
    const notOnTop = usePageOnTop();

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
        <div className='fixed top-0 w-screen h-36 px-10 z-10'>
            <div className="flex flex-row items-center justify-between h-full w-full">
                <h1 className="px-3 z-50">
                    <Link href="/" className="flex items-center font">
                        <Image src={tk} alt="Tk Logo" width={70} className={`transition-all ease-in-out duration-500 ${notOnTop ? 'w-[100px]' : 'w-[70px]'}`} />
                        <h4 className={`${styles.name} tracking-widest text-xl md:text-3xl transition-all ease-in-out duration-500 ${notOnTop ? 'opacity-0' : 'opacity-100'}`}>Troy Kush</h4>
                    </Link>
                </h1>
                <div className="flex items-center flex-col">
                    <button
                        onClick={toggleMenu}
                        onMouseEnter={hoverMenu}
                        onMouseLeave={leaveHoverMenu}
                        className={`z-[101] transition-transform duration-1000 ease-in-out transform flex flex-col items-end cursor-pointer h-[50px] w-[40px]`}>
                        <div className={`${styles.navBars} h-[3px] rounded-xl w-[40px] ${isMenuOpen ? 'translate-y-[15px]' : 'mt-[10px]'} ease-in-out duration-1000 transform ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`} />
                        <div className={`${styles.navBars} h-[3px] ${isMenuOpen ? 'w-0' : isMenuHover ? 'w-[110%] mt-[10px]' :'w-[70%] mt-[10px]'} transition-all duration-700 ease-in-out rounded-xl`} />
                        <div className={`${styles.navBars} h-[3px] rounded-xl w-[40px] ${isMenuOpen ? 'translate-y-[10px]' : 'mt-[10px]'} ease-in-out duration-1000 transform ${isMenuOpen ? 'rotate-[135deg]' : 'rotate-0'}`} />
                    </button>

                    <div className={`absolute z-[100] top-0 ${isMenuOpen ? 'right-0 opacity-1' : 'right-[-100%] opacity-0'} flex text-lg sm:text-xl font-light bg-[#0b132b1e] backdrop-blur-xl p-10 shadow-xl overflow-hidden transition-all duration-500 ease-linear h-screen w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw]`}> 
                        <div className="flex items-center w-full">
                            <ul className='tracking-widest h-[65vh] flex flex-col justify-around'>
                                <li className={`relative transition-all ${isMenuOpen ? 'right-0 opacity-1' : 'right-[-250px] opacity-0'} ease-in-out duration-[2s]`}><Link onClick={closeDropdown} href="/" className={styles.linkHover}>Home</Link></li>
                                <li className={`relative transition-all ${isMenuOpen ? 'right-0 opacity-1' : 'right-[-250px] opacity-0'} ease-in-out duration-[2.2s]`}><Link onClick={closeDropdown} href="#projects" className={styles.linkHover}>Projects</Link></li>
                                <li className={`relative transition-all ${isMenuOpen ? 'right-0 opacity-1' : 'right-[-250px] opacity-0'} ease-in-out duration-[2.4s]`}><Link onClick={closeDropdown} href="#aboutMe" className={styles.linkHover}>About Me</Link></li>
                                <li className={`relative transition-all ${isMenuOpen ? 'right-0 opacity-1' : 'right-[-250px] opacity-0'} ease-in-out duration-[2.6s]`}><Link onClick={closeDropdown} href="#contact" className={styles.linkHover}>Work With Me</Link></li>
                                <li className={`relative transition-all ${isMenuOpen ? 'right-0 opacity-1' : 'right-[-250px] opacity-0'} ease-in-out duration-[2.8s]`}><Link href='tel:2185764997' className={styles.linkHover}>(218) 576-4997</Link></li>
                                <li className={`relative transition-all ${isMenuOpen ? 'right-0 opacity-1' : 'right-[-250px] opacity-0'} ease-in-out duration-[3s]`}><Link href='mailto:troykush@gmail.com' className={styles.linkHover}>troykush@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full h-[1px] bg-[#d6d6d632] transition-all ease-in-out duration-500 ${notOnTop ? 'opacity-0' : 'opacity-100'}`} />
        </div>
    )
}