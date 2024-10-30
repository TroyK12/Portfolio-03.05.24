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
	title: 'Troy M Kush | Website Designer | Duluth MN',
	description: 'Troy Kush, Portfolio',
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
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
				<Script id="google-analytics">
					{`
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					
					  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
					`}
				</Script>
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
