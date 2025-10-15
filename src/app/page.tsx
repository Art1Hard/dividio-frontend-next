import ActionSection from "@/components/home/ActionSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IntroSection from "@/components/home/IntroSection";
import { SITE_NAME } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `Главная | ${SITE_NAME}`,
	description:
		"Контролируйте доходы, распределяйте их по категориям и следите за статистикой. Всё для финансового порядка — в одном месте.",
	keywords:
		"Dividio, доходы, расходы, категории, статистика, финансы, управление финансами",
};

export default function HomePage() {
	return (
		<main className="w-full min-h-screen bg-gradient-to-b from-primary-100 to-primary-300/70">
			<div className="flex flex-col items-center justify-center pt-16">
				<IntroSection />
				<FeaturesSection />
				<ActionSection />
			</div>
		</main>
	);
}
