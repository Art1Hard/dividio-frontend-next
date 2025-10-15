import { ROUTES } from "@/config/routes.config";
import Link from "next/link";

const ActionSection = () => {
	return (
		<section className="bg-accent text-white text-center py-16 md:py-24 px-4 sm:px-6 w-full">
			<h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
				Начни управлять своими финансами уже сегодня
			</h2>
			<p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-10 max-w-md sm:max-w-xl mx-auto">
				Dividio поможет тебе видеть, куда уходят деньги и как их оптимизировать.
			</p>
			<Link
				href={ROUTES.SIGN_UP}
				className="bg-white text-accent px-6 py-3 sm:px-10 sm:py-4 rounded-xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
				Попробовать бесплатно
			</Link>
		</section>
	);
};

export default ActionSection;
