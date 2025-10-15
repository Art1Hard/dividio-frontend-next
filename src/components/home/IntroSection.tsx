import Link from "next/link";
import BaseButton from "../ui/buttons/BaseButton";
import { ROUTES } from "@/config/routes.config";

const IntroSection = () => {
	return (
		<section className="text-center px-4 max-w-6xl mx-auto ">
			<h1 className="sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-lg">
				<span className="block sm:inline text-3xl sm:text-4xl md:text-6xl text-accent dark:text-accent-dark mb-1 sm:mb-0">
					Dividio
				</span>
				<span className="hidden sm:inline"> &mdash;</span>&nbsp;Финансовая
				грамотность в&nbsp;одном&nbsp;месте
			</h1>
			<p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 max-w-md sm:max-w-xl mx-auto">
				Планируй доходы и распределяй их, контролируй свои финансы с наглядными
				диаграммами.
			</p>
			<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
				<Link className="w-full max-w-[305px]" href={ROUTES.SIGN_UP}>
					<BaseButton className="py-3 sm:py-4 w-full">
						Попробовать бесплатно
					</BaseButton>
				</Link>

				<Link className="w-full max-w-[305px]" href={ROUTES.SIGN_UP}>
					<BaseButton className="py-3 sm:py-4 w-full" color="secondary">
						Подробнее
					</BaseButton>
				</Link>
			</div>
		</section>
	);
};

export default IntroSection;
