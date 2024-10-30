import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background from './Background';
import Footer from './Footer/Footer';
import './globals.css';
import Navbar from './Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Troy M Kush | Website Designer | Duluth MN',
	description: 'Troy Kush, Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<Background />
				<main className="overflow-x-clip md:overflow-x-visible">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
