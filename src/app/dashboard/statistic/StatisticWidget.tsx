"use client";

import { FaBoxes, FaCoins, FaDove } from "react-icons/fa";
import useStatistic from "./hooks/useStatistic";
import StatisticItem from "@/app/dashboard/statistic/StatisticItem";

const StatisticWidget = () => {
	const { statistic } = useStatistic();

	if (!statistic) return <p>Статистика не загрузилась...</p>;

	return (
		<div className="flex flex-col gap-4 justify-between items-center sm:flex-row sm:flex-wrap sm:justify-center">
			<StatisticItem
				title="Общий доход"
				content={`${statistic.totalIncomesAmount.toLocaleString("ru")} ₽`}
				icon={FaCoins}
			/>
			<StatisticItem
				title="Источников дохода"
				content={`${statistic.totalIncomes.toLocaleString("ru")} шт.`}
				icon={FaBoxes}
			/>
			<StatisticItem
				title="Нераспределено"
				content={`${statistic.freePercentage.toLocaleString("ru")}%`}
				icon={FaDove}
			/>
		</div>
	);
};

export default StatisticWidget;
