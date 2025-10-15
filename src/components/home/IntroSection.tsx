"use client";

import { motion, Variants } from "framer-motion";
import BaseButton from "../ui/buttons/BaseButton";
import { ROUTES } from "@/config/routes.config";

const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
};

const IntroSection = () => {
	return (
		<motion.section
			className="text-center px-4 max-w-6xl mx-auto"
			variants={containerVariants}
			initial="hidden"
			animate="show">
			<motion.h1
				className="sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-lg"
				variants={itemVariants}>
				<span className="block sm:inline text-3xl sm:text-4xl md:text-6xl text-accent dark:text-accent-dark mb-1 sm:mb-0">
					Dividio
				</span>
				<span className="hidden sm:inline"> &mdash;</span>&nbsp;Финансовая
				грамотность в&nbsp;одном&nbsp;месте
			</motion.h1>

			<motion.p
				className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 max-w-md sm:max-w-xl mx-auto"
				variants={itemVariants}>
				Планируй доходы и распределяй их, контролируй свои финансы с наглядными
				диаграммами.
			</motion.p>

			<motion.div
				className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
				variants={itemVariants}>
				<BaseButton
					href={ROUTES.SIGN_UP}
					className="w-full max-w-[305px] py-3 sm:py-4">
					Попробовать бесплатно
				</BaseButton>

				<BaseButton
					href={ROUTES.SIGN_UP}
					className="w-full max-w-[305px] py-3 sm:py-4"
					color="secondary">
					Подробнее
				</BaseButton>
			</motion.div>
		</motion.section>
	);
};

export default IntroSection;
