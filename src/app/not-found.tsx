"use client"
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            There was an error, please try reloading the page or going back to the home page by clicking below.
            <Link href='/' className="w-[150px] h-10 p-2 rounded bg-slate-600 text-center">Home</Link>
        </div>
    )
}