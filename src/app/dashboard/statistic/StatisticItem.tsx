import { IconType } from "react-icons";
import { motion, useReducedMotion } from "framer-motion";
import { itemVariants } from "@/constants/animation.constants";

interface StatisticItemProps {
	title: string;
	postfix?: string;
	content: string;
	icon: IconType;
}

const StatisticItem = ({ title, content, icon }: StatisticItemProps) => {
	const shouldReduceMotion = useReducedMotion();
	const Icon = icon;

	return (
		<motion.div
			variants={shouldReduceMotion ? undefined : itemVariants}
			className="max-w-sm w-full bg-primary-200 rounded-2xl p-4 shadow-md flex flex-1 items-center gap-4 sm:flex-col sm:gap-2 sm:p-6 lg:flex-row lg:gap-4">
			<div className="p-3 rounded-full text-white bg-accent">
				<Icon className="w-6 h-6" />
			</div>
			<div className="sm:text-center lg:text-left text-nowrap">
				<h2 className="text-md lg:text-lg text-secondary-700">{title}</h2>
				<p className="text-2xl lg:text-3xl font-bold">{content}</p>
			</div>
		</motion.div>
	);
};

export default StatisticItem;
