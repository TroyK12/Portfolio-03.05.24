import Image from 'next/image';
import selfPhoto from '@/assets/head_img.png';
import Form from './Form';

export default function Footer() {
	return (
		<div className="h-screen w-screen relative">
			<div className="h-full w-full flex flex-col-reverse md:flex-row">
				<div className="w-full md:w-1/2 flex flex-col justify-between px-8 pt-5 md:pt-[15vh]">
					<div>
						<Image
							src={selfPhoto}
							alt="Self Photo"
							width={100}
							className="w-[100px] md:w-[130px] rounded-full mb-2"
						/>
						<h2 className="md:text-4xl font-thin whitespace-break-spaces">
							t r o y k u s h @ g m a i l . c o m
						</h2>
					</div>
					<h2 className="text-xs font-mono">
						2025 &copy; TKM Webcreations LLC
					</h2>
				</div>
				<div className="w-full md:w-1/2 flex flex-col items-center justify-center pt-10">
					<div className="pb-5 w-full flex flex-col items-center">
						<h1 className="text-3xl font-thin py-2">What Can I Do To Help?</h1>
						<div className="h-[2px] min-w-[100px] w-[30%] bg-white mx-3 relative" />
					</div>
					<Form />
				</div>
			</div>
		</div>
	);
}
