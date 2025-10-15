"use client";

import { ROUTES } from "@/config/routes.config";
import { motion, Variants } from "framer-motion";
import MotionLink from "../MotionLink";

const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 1.4,
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

const buttonVariants: Variants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
	hover: { scale: 1.05 },
};

const ActionSection = () => {
	return (
		<motion.section
			className="bg-accent text-white text-center py-16 md:py-24 px-4 sm:px-6 w-full"
			variants={containerVariants}
			initial="hidden"
			animate="show">
			<motion.h2
				className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6"
				variants={itemVariants}>
				Начни управлять своими финансами уже сегодня
			</motion.h2>

			<motion.p
				className="text-sm sm:text-base md:text-xl mb-6 sm:mb-10 max-w-md sm:max-w-xl mx-auto"
				variants={itemVariants}>
				Dividio поможет тебе видеть, куда уходят деньги и как их оптимизировать.
			</motion.p>

			<motion.div variants={itemVariants}>
				<MotionLink
					href={ROUTES.SIGN_UP}
					className="bg-white text-accent px-6 py-3 sm:px-10 sm:py-4 rounded-xl shadow-lg cursor-pointer"
					variants={buttonVariants}
					whileHover="hover">
					Попробовать бесплатно
				</MotionLink>
			</motion.div>
		</motion.section>
	);
};

export default ActionSection;
