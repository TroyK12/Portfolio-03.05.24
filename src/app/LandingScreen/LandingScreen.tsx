import styles from './landing.module.css';
import Header from "./Header";
//import mn from '@/assets/mn.png';
import Title from "./Title";

const timeOfDay = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

export default function LandingScreen() {
  const greeting = timeOfDay();

  const diffWords = ['Freelancer', 'UI / UX Designer', 'Developer', 'Duluth Minnesota', greeting];

  return (
    <div className="relative h-screen w-screen">
      <div className="fixed z-20 bottom-5 md:bottom-1 w-full flex justify-center">
        <div className="relative w-[2px] h-[75px] bg-white">
          <div className={`absolute top-0 w-full bg-slate-600 ${styles.indicatorBar}`} />
        </div>
      </div>
      <div className="w-full h-full">
        <div className="pt-36 pl-28">
            <Header words={diffWords} />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Title />
        </div>
      </div>
    </div>
    )
}

/*<div className="absolute top-0 left-0 z-10 pt-24 pl-14 font-light text-base md:text-lg tracking-widest">Duluth Minnesota</div>
<CanvasHome />
           */

/* 
      <div className="w-screen flex flex-col justify-end items-end rounded-t-xl bg-[#1c2540]">
            <div className="mr-[90%] w-2 h-5 flex flex-col pt-5">
              <Header words={diffWords} />
            </div>
          <div className="bg-[#242729ea] p-3 w-[99%] flex justify-center items-center rounded-xl shadow-2xl m-auto">
            <div className="relative flex justify-end md:justify-end items-center w-full md:w-2/3">
              <h1 className="font-thin text-lg md:text-4xl pr-10 tracking-widest">Heart Of Duluth</h1>
              <Image src={mn} alt="MN" className="w-[130px] md:w-[150px]" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 absolute top-16 right-11">
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </div>
            </div>
          </div>
*/