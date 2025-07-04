import ListedProjects from './ListedProjects';
import salon from '@/assets/salon-beauty.png';
import restaurant from '@/assets/restaurant-home.png';
import ingenuityBuilders from '@/assets/ingenuity-builders.png';
import lilysAngels from '@/assets/lilysangels.png';
import lilysAngelsMobile from '@/assets/lilysangels-mobile.png';
import windrifter from '@/assets/windrifter-siberians.png';
import windrifterMobile from '@/assets/windrifter-siberians-mobile.png';

import mobileSalon from '@/assets/salon-mobile.png';
import mobileRestaurant from '@/assets/cafe-mobile.png';
import mobileIngenuity from '@/assets/ingenuity-mobile.png';

import { StaticImageData } from 'next/image';
import FramerTextStyles from './FramerTextStyles';
import FramerLaptop from './FramerLaptop';

interface Project {
	image: StaticImageData;
	mobileImage: StaticImageData;
	name: string;
	title: string;
	desc: string;
	src: string;
	id: number;
}

const projectList: Project[] = [
	{
		image: ingenuityBuilders,
		mobileImage: mobileIngenuity,
		name: 'Ingenuity Builders',
		title: 'Ingenuity Builders, llc',
		desc: "Hidding Minnesota's One Source For Windows, Bathrooms and Decks",
		src: 'https://ingenuitybuilders.com',
		id: 1,
	},
	{
		image: lilysAngels,
		mobileImage: lilysAngelsMobile,
		name: "Lily's Angels",
		title: "Lily's Angels",
		desc: 'Create a heartfelt online pet memorial for your beloved dog, cat or Horse.',
		src: 'https://lilysangels.com/',
		id: 2,
	},
	{
		image: salon,
		mobileImage: mobileSalon,
		name: 'forbidden beauty salon',
		title: 'Forbidden Beauty Salon',
		desc: 'A fresh new design for Forbidden Beauty Salon',
		src: 'https://troyk12.github.io/forbidden-future/',
		id: 3,
	},
	{
		image: windrifter,
		mobileImage: windrifterMobile,
		name: 'Windrifter Siberians',
		title: 'Windrifter Siberians',
		desc: "Northern Minnesota's own Siberian cattery with over 30 years of experience",
		src: 'https://windriftersiberians.com/',
		id: 4,
	},
	{
		image: restaurant,
		mobileImage: mobileRestaurant,
		name: "crave's restaurant",
		title: "Crave's Sandwhich & Coffee",
		desc: 'Delve into your cravings and visit the delicious café',
		src: 'https://troyk12.github.io/craves-coffee/',
		id: 5,
	},
];

const texts = [
	{
		id: 1,
		color: 'bg-[#454545]',
		fadeDirection: -100,
		position: 'self-start',
		text: "Hi! I'm looking to create a customized e-commerce website for my company. We sell hoodies, long-sleeve shirts, and t-shirts. Can you help with that?",
	},
	{
		id: 2,
		color: 'bg-[#007bff]',
		fadeDirection: 100,
		position: 'self-end',
		text: 'Absolutely! I can handle the design, development, and hosting. Do you have any specific design ideas?',
	},
	{
		id: 3,
		color: 'bg-[#454545]',
		fadeDirection: -100,
		position: 'self-start',
		text: 'I want a clean, modern, mobile-friendly design with easy navigation and high-quality product images.',
	},
	{
		id: 4,
		color: 'bg-[#007bff]',
		fadeDirection: 100,
		position: 'self-end',
		text: "Great! I'll create a design mockup for your review. Once you approve, I'll move on to development. How does that sound?",
	},
	{
		id: 5,
		color: 'bg-[#454545]',
		fadeDirection: -100,
		position: 'self-start',
		text: 'Perfect. How long until the mockup is ready?',
	},
	{
		id: 6,
		color: 'bg-[#007bff]',
		fadeDirection: 100,
		position: 'self-end',
		text: 'About a week or two. After your approval, development will take 2-3 weeks. Looking forward to working with you!',
	},
	{
		id: 7,
		color: 'bg-[#454545]',
		fadeDirection: -100,
		position: 'self-start',
		text: 'Sounds good. Thanks for your help! When can we get started?',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="relative w-screen">
			<div className="w-full flex flex-col md:flex-row md:pl-20 py-10">
				<div className="relative w-full md:w-[75%] pt-20">
					<h2 className="w-full text-center py-[50px] text-3xl font-bold">
						How do we get started?
					</h2>
					<div className="flex flex-col gap-4 justify-start items-end px-1 py-10">
						{texts.map((text) => (
							<div
								key={text.id}
								className={`relative w-[85%] sm:w-[65%] ${text.position}`}>
								<FramerTextStyles
									color={text.color}
									className2="w-full"
									className1="font-mono text-[12px] sm:text-[16px] rounded-3xl py-[8px] px-4">
									{text.text}
								</FramerTextStyles>
							</div>
						))}
					</div>
					<FramerLaptop />
				</div>
				<div className="w-full flex flex-col justify-center items-center gap-8 py-20">
					<div className="justify-self-start w-full"></div>
					<div className="w-full flex flex-col justify-end items-center gap-8">
						{projectList.map((project) => {
							return <ListedProjects project={project} key={project.id} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
