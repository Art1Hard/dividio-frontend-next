"use client";

import { HiCalendar, HiChartPie, HiShieldCheck } from "react-icons/hi2";
import { motion, Variants } from "framer-motion";

const listVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.4,
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

const FeaturesSection = () => {
	return (
		<motion.section
			variants={listVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="py-16 md:py-24 px-4 sm:px-6">
			<motion.ul
				className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-12"
				variants={listVariants}>
				<motion.li className="max-w-xs text-center" variants={itemVariants}>
					<HiChartPie className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 text-accent" />
					<h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
						Визуальные диаграммы
					</h2>
					<p className="text-sm sm:text-base">
						Следи за тем, на что уходят деньги и как распределяется бюджет.
					</p>
				</motion.li>

				<motion.li className="max-w-xs text-center" variants={itemVariants}>
					<HiShieldCheck className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 text-accent" />
					<h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
						Безопасность
					</h2>
					<p className="text-sm sm:text-base">
						Все данные хранятся безопасно, и никто не увидит твои финансовые
						детали.
					</p>
				</motion.li>

				<motion.li className="max-w-xs text-center" variants={itemVariants}>
					<HiCalendar className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 text-accent" />
					<h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
						Планирование доходов
					</h2>
					<p className="text-sm sm:text-base">
						Разделяй доходы на необходимые расходы, сбережения и хотелки.
					</p>
				</motion.li>
			</motion.ul>
		</motion.section>
	);
};

export default FeaturesSection;
