import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background from './Background';
import Footer from './Footer/Footer';
import './globals.css';
import Navbar from './Navbar/Navbar';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Troy Kush | Website Designer | Website Developer | Duluth MN',
	description:
		'Freelance web designer & developer building beautiful websites that work. I specialize in custom sites for small businesses and creatives-no cookie-cutter templates, just your brand brought to life. Based in Duluth, MN | React, Next.js, Tailwind CSS | Let’s make your site unforgettable.',
	twitter: {
		card: 'summary_large_image',
	},
	appleWebApp: {
		capable: true,
		title: 'Troy Kush',
		statusBarStyle: 'black-translucent',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<Script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script id="google-analytics">
					{`
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					
					  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
					`}
				</Script>
				<Script
					async
					defer
					strategy="beforeInteractive"
					src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
				/>
			</head>
			<body className={inter.className}>
				<Navbar />
				<Background />
				<main className="overflow-x-clip md:overflow-x-visible">
					{children}
				</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
