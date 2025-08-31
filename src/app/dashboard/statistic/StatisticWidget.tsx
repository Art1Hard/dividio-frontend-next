"use client";

import useStatistic from "./hooks/useStatistic";
import StatisticItem from "@/app/dashboard/statistic/StatisticItem";
import { motion, useReducedMotion } from "framer-motion";
import { containerVariants } from "@/constants/animation.constants";

const StatisticWidget = () => {
	const shouldReduceMotion = useReducedMotion();
	const { statistics, statuses } = useStatistic();

	return (
		<motion.div
			variants={shouldReduceMotion ? undefined : containerVariants}
			initial="initial"
			animate="animate"
			className="flex flex-col gap-4 justify-between items-center sm:flex-row sm:flex-wrap sm:justify-center">
			{statistics.map((statistic) => (
				<StatisticItem
					key={statistic.title}
					title={statistic.title}
					content={statistic.content}
					icon={statistic.icon}
					loading={statuses.isLoading}
				/>
			))}
		</motion.div>
	);
};

export default StatisticWidget;
