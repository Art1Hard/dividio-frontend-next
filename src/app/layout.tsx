import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/constants/seo.constants";
import Header from "@/components/header";
import clsx from "clsx";
import Providers from "./providers";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-inter",
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body
				className={clsx(
					inter.variable,
					"antialiased font-sans flex flex-col min-h-screen"
				)}>
				<Providers>
					<Header />
					{children}
					<Toaster
						className="cursor-default"
						position="bottom-right"
						theme="system"
					/>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
