import { StaticImageData } from "next/image";
import Image from "next/image";
import CardBtn from "./CardBtn";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    image: StaticImageData;
    nightImage: StaticImageData;
    aboutArea: string;
    link: string;
    linkName: string;
}

export default function Card({ children, className, image, nightImage, aboutArea, link, linkName }: CardProps) {



    return (
        <div className="card-container">
            <div className={`relative card ${className}`}>
                <div className="relative front-card w-[85vw] h-[70vh] md:w-[60vw] md:h-[60vh] lg:w-[25vw] lg:h-[550px] shadow-2xl rounded-2xl overflow-hidden">
                    <Image src={image} alt="Duluth Image" className="absolute top-0 left-[-90px] md:left-0 lg:left-[-80px] h-full max-w-none w-auto" />
                    <div className="w-full h-full bg-[#7d7d7d41] flex flex-col items-center justify-center absolute p-5 font-thin text-3xl text-shadow">
                        {children}
                    </div>
                </div>
                <div className="back-card w-[85vw] h-[70vh] md:w-[60vw] md:h-[60vh] lg:w-[25vw] lg:h-[550px] rounded-2xl shadow-2xl absolute top-0 overflow-hidden">
                    <div className="relative w-full h-full">
                    <Image src={nightImage} alt="Duluth Image" className="absolute top-0 left-[-90px] md:left-0 lg:left-[-90px] h-full max-w-none w-auto" />
                        <div className="absolute py-7 px-3 w-full h-full text-center leading-7 flex flex-col justify-between bg-[#00000068]">
                            <p className="letter-shadow leading-7 tracking-widest font-medium">{aboutArea}</p>
                            <CardBtn link={link}>{ linkName }</CardBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}