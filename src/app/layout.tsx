import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/constants/seo.constants";
import Header from "@/components/header";
import clsx from "clsx";
import Providers from "./providers";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-inter",
	display: "swap",
	weight: ["400", "500", "600", "700"], // можно выбрать нужные веса
});

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: "Save your money and earn with it",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={clsx(
					inter.variable,
					"antialiased font-sans flex flex-col h-screen"
				)}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
