import Image from "next/image";
import ContactLink from "./ContactLink";
import WordHover from "./WordHover";
import afghanPhoto from "@/assets/afghan-photo.png";

const wordDescription = {
    javascript: {id: 1, content: "The journey of learning your first language has been eventful. Through all the mistakes you learn from, to all the endless knowledge to learn. Using this for client-side development has made these projects really come to life."},
    css: { id: 2, content: "Using the wide range of CSS features to create these beautiful websites has been a staple of the magic for these websites. Using frameworks such as Tailwind CSS and DaisyUI helps create these designs more efficient." },
    nextjs: { id: 3, content: "I love working with Next.js, it allows you to use a framework such as React and render server actions within the project. The built-in features for SEO opimization and the support for Typescript gives users much as myself a great range of benefits." },
}

export default function AboutMe() {

    return (
        <section id="aboutMe" className="w-screen h-auto my-5 flex justify-center py-32">
            <div className="flex flex-col gap-20 w-full pt-8 relative">
                <div className="relative w-[60vw] font-thin text-base md:text-[21px] leading-9 text-shadow">
                    <div className="bg-[#303436] relative z-10 w-full h-full p-10 rounded-r-2xl">
                        <div className="flex justify-between">
                            <h1 className="text-2xl md:text-4xl tracking-wide pb-7">Where It Started</h1>
                            <div className="hidden sm:block relative w-[123px]">
                                <div className="h-[2px] w-full bg-white mt-[3px] absolute left-0 top-0" />
                                <div className="absolute font-light top-[-15px] left-[-10px]">&gt;</div>
                                <div className="absolute font-light top-[-15px] left-[-2px]">&gt;</div>
                                <div className="absolute font-light top-[-15px] left-[6px]">&gt;</div>
                                <div className="absolute font-light top-[-15px] left-[114px]">&gt;</div>
                            </div>
                        </div>    
                        <p>My adventure starts in the heart of the Middle East, serving my county as a satelite specialist. I specialised in the operation and maintence
                            of our satelite equiptment and through that, I learned how to set up firewalls and ensure that we had the correct configuration to connect to our satelite.
                            This experience ignited my passion for learning how the inner works of computers and software developement.
                        </p>
                    </div>
                    <div className="absolute top-[6%] right-[-20px] z-0 w-[253px] h-[152px] md:w-[353px] md:h-[252px] transform-all duration-[800ms] ease-in-out -skew-x-6 hover:translate-x-44 md:hover:translate-x-72 hover:skew-x-0 overflow-hidden rounded-lg shadow-2xl">
                        <Image className="h-full w-full transform-all duration-[1100ms] ease-in-out hover:scale-150" src={afghanPhoto} alt="Photo Taken in Afghanistan" />
                    </div>
                </div>
                <div className="relative w-full flex flex-col items-end font-thin text-lg md:text-[21px] tracking-wide leading-9 text-shadow">
                    <div className="w-[60vw] bg-[#242729ea] p-10 rounded-l-2xl">
                        <h1 className="text-2xl md:text-4xl pb-7">Where We&apos;re At</h1>
                        <p>A commited self taught journey over the years has provided me with profficient skills
                            in <WordHover id={wordDescription.javascript.id} content={wordDescription.javascript.content}>Javascript</WordHover>, HTML, <WordHover id={wordDescription.css.id} content={wordDescription.css.content}>CSS</WordHover> and more
                            recently <WordHover id={wordDescription.nextjs.id} content={wordDescription.nextjs.content}>Next.js</WordHover> to put my skills together with a backend. These skills have allowed me to bring together
                            the pieces that I have show cased below. I&apos;m excited to continue my adventure of the world of technology with you!
                        </p>
                    </div>
                    <ContactLink />
                </div>
            </div>
        </section>
    )
}