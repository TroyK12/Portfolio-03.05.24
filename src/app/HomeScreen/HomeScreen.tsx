import Image from "next/image";
import Header from "./Header";
import troyPhoto from '@/assets/troy-head.png'
import Greeting from "./Greeting"

const timeOfDay = () => {
    const currentHour = new Date().getHours();
  
    if (currentHour >= 0 && currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  }

export default function HomeScreen() {
  const diffWords = ['Designer ', 'Developer ', 'Javascript ', 'Next.js ', 'TypeScript '];
  const greeting = timeOfDay()

  return (
      <div>
        <div className="h-[90vh] w-screen flex flex-col justify-between snap-none">
          <div className="md:h-2/3">
              <div className="mt-24 ml-10 font-light text-lg tracking-widest">Duluth Minnesota</div>
              <Greeting>{greeting}</Greeting>
          </div>
          <div className="w-screen flex flex-col justify-end items-end overflow-hidden md:overflow-visible">
            <div className="md:m-auto mr-60 w-2 md:h-full flex flex-col md:justify-start">
              <Header words={diffWords} />
            </div>
            <div className="bg-[#242729ea] w-[99%] flex justify-end rounded-xl pr-[200px] shadow-2xl m-auto">
              <Image className="mt-6 md:mt-0 right-slide-in" src={troyPhoto} alt="filler Photo" width={350} />
            </div>
          </div>
        </div>
        <div className="w-1/4 flex justify-center">
            <svg className="w-16 h-16 p-2 rounded-full border-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path className="fill-white" fill="#000000" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
        </div>
      </div>
    )
}
