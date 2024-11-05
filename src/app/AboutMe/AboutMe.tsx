import FramerTextStyles from './FramerTextStyles';
import FramerCardStyles from './FramerCardStyles';
import Image from 'next/image';

import nextLogo from '@/assets/next-logo.png';
import jsLogo from '@/assets/js-logo.png';
import cssLogo from '@/assets/css-logo.png';
import htmlLogo from '@/assets/html-logo.png';
import reactLogo from '@/assets/react-logo.png';
import vscodeLogo from '@/assets/vscode-logo.png';
import mongodbLogo from '@/assets/mongodb-logo.png';
import nodeLogo from '@/assets/node-logo.png';

const aboutMeProf =
	"I'm a full stack website designer and developer based in Duluth, mn as a freelancer. I love merging technical skills and visual design to create vibrant digital products. With a passion for design and solid development skills, I'm here to bring your vision to life and create a web experience that's uniquely yours.";
const aboutMePersonal =
	"I'm happiest when I'm creating, learning and exploring. When I'm not immersed in coding, you can find me snowboarding down the hills or hitting the trails for a run. My passion for adventure and the great outdoors fuels my creativity and determination in all my projects.";
const title = 'who is troy?';
const title2 = 'a curiosity-driven self taught freelance developer';

export default function AboutMe() {
	return (
		<section id="aboutMe" className="relative w-screen pt-14">
			<div className="w-full flex flex-col md:flex-row">
				<div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-20">
					<div className="pl-3">
						<FramerTextStyles
							duration={0.8}
							text={title}
							className="text-3xl"
						/>
					</div>
					<FramerCardStyles />
				</div>
				<div className="w-full md:w-[60%] md:pr-36 pt-28 px-3 sm:px-0 flex flex-col justify-center items-center md:items-start gap-5">
					<FramerTextStyles
						duration={0.8}
						text={title2}
						className="text-lg sm:text-2xl pb-4"
					/>
					<FramerTextStyles
						duration={0.3}
						text={aboutMeProf}
						className="font-mono text-sm sm:text-base leading-10"
					/>
					<FramerTextStyles
						duration={0.5}
						text={aboutMePersonal}
						className="font-mono text-sm sm:text-base leading-10"
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5 sm:gap-0 py-20 w-full">
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
