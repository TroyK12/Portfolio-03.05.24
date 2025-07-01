import FramerTextStyles from './FramerTextStyles';
import Image from 'next/image';
import nextLogo from '@/assets/next-logo.png';
import jsLogo from '@/assets/js-logo.png';
import cssLogo from '@/assets/css-logo.png';
import htmlLogo from '@/assets/html-logo.png';
import reactLogo from '@/assets/react-logo.png';
import vscodeLogo from '@/assets/vscode-logo.png';
import mongodbLogo from '@/assets/mongodb-logo.png';
import nodeLogo from '@/assets/node-logo.png';
import aboutMePhoto from '@/assets/about-photo.png';
import ScrollImageTransition from './AboutMePhotos';
import FramerParagraphs from './FramerParagraphs';

const aboutMe = {
	professionalParagraph:
		"I'm a freelance web designer and developer working from beautiful Duluth, MN. I get a real kick out of making cool things for the internet, mixing up my coding skills with a knack for visual design. Let's work together to make a site that's all you.",
	personalParagraph:
		"I need to get out and move. You'll either find me on a snowboard or exploring some trails. Getting outside is a huge part of my life and keeps me creative and ready for any challenge a project throws my way.",
	sectionTitle: 'So. . Who am I?',
	professionalTitle: "My name's Troy, and I build things for the web",
	personalTitle: "And when I'm not working...",
};

export default function AboutMe() {
	return (
		<section id="aboutMe" className="w-screen">
			<div className="relative w-full flex flex-col md:flex-row py-10">
				<div className="w-full md:w-[40%] flex flex-col max-md:justify-center items-start gap-8">
					<div className="px-4 w-full text-center">
						<FramerTextStyles
							duration={0.8}
							text={aboutMe.sectionTitle}
							className="text-3xl md:text-4xl font-medium"
						/>
					</div>

					<div className="flex items-center justify-center w-full h-full px-4">
						<ScrollImageTransition
							firstImage={aboutMePhoto}
							secondImage={aboutMePhoto}
							className="w-full max-w-[400px]"
							aspectRatio="3/5"
						/>
					</div>
				</div>
				<div className="w-full min-h-full md:w-[60%] px-3 sm:px-0 max-md:pt-10 flex flex-col gap-20 max-md:justify-center md:justify-center items-center md:items-start">
					<div className="flex flex-col gap-7 max-w-[90%]">
						<FramerTextStyles
							duration={0.8}
							text={aboutMe.professionalTitle}
							className="text-lg sm:text-2xl font-bold"
						/>

						<FramerParagraphs text={aboutMe.professionalParagraph} />
					</div>

					<div className="flex flex-col gap-7 max-w-[90%]">
						<FramerTextStyles
							duration={0.8}
							text={aboutMe.personalTitle}
							className="text-lg sm:text-2xl font-bold"
						/>
						<FramerParagraphs text={aboutMe.personalParagraph} />
					</div>
				</div>
			</div>
			<div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5 sm:gap-0 py-20 w-full">
				<Image
					src={htmlLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
				<Image
					src={cssLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
				<Image
					src={jsLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
				<Image
					src={reactLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
				<Image
					src={nextLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
				<Image
					src={nodeLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
				<Image
					src={vscodeLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
				<Image
					src={mongodbLogo}
					alt="logo"
					width={40}
					className="w-[40px] h-[40px] my-3 mx-auto"
				/>
			</div>
		</section>
	);
}
