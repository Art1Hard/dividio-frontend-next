import ActionSection from "@/components/home/ActionSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IntroSection from "@/components/home/IntroSection";

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
