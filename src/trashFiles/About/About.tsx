import Image from 'next/image'
import afghanPhoto from '@/assets/afghan-photo.png'

export default function About() {

    return (
        <div className='flex flex-col items-center overflow-y-scroll h-[60%] px-4'>
            <h1 className="text-xl py-3">Where It Started</h1>
            <p>
                My adventure starts in the heart of the Middle East, serving my country as a satelite specialist in the summer of 2021. I specialised in the operation and maintence of our
                satelite equiptment and through that, I learned how to set up firewalls and ensure that we had the correct configuration to connect to our satelite.
                This experience ignited my passion for learning the inner works of computers and software developement.
            </p>
            <Image className='w-[50%] mt-2 rounded transition-all ease-linear duration-500 hover:scale-150' src={afghanPhoto} alt='Military Photo' width={4000} />
        </div>
    )
}