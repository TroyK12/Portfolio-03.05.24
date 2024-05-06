import Link from "next/link"
import MenuBars from "./MenuBars"

export default function Navbar() {
    return (
        <div className='fixed w-screen h-36 flex flex-row items-center justify-between px-10 z-30'>
            <h1 className="font-bold text-xl md:text-2xl px-3 name z-40"><Link href="/">Troy Kush</Link></h1>
            <MenuBars />
        </div>
    )
}