import SourceCode from "./SourceCode";
import Image from "next/image"
import selfPhoto from "@/assets/head_img.png"
import Form from "./Form";

export default function Footer() {
    return (
        <div className="w-screen relative bg-gradient-to-b from-[#1C2541] to-[#0B132B]">
            <SourceCode>
                Take a peek behind the scenes and see how my production comes together in a special director&apos;s cut. Explore the magic of the 
                silver screen creation as you witness the creative journey that turns ideas into an extraordinary cinematic adventure.
            </SourceCode>
            <div className="h-screen w-screen">
                <div className="h-full w-full flex flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2 flex flex-col justify-between px-8 md:pt-[15vh]">
                        <div>
                            <Image src={selfPhoto} alt="Self Photo" className="w-[100px] md:w-[130px] rounded-full mb-2" />
                            <h2 className="md:text-5xl font-thin whitespace-break-spaces">t r o y k u s h @ g m a i l . c o m</h2>
                        </div>
                        <h2>&copy; 2024</h2>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center pt-10">
                        <div className="pb-5 w-full flex flex-col items-center">
                            <h1 className="text-3xl font-thin py-2">Hit Me Up!</h1>
                            <div className="h-[2px] min-w-[100px] w-[30%] bg-white mx-3 relative">
                                <div className="absolute right-[-4px] top-[-12px]">&gt;</div>
                                <div className="absolute left-[-6px] top-[-12px]">&gt;</div>
                                <div className="absolute left-[2px] top-[-12px]">&gt;</div>
                                <div className="absolute left-[10px] top-[-12px]">&gt;</div>
                            </div> 
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}