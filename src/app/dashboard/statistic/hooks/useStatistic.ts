import { financeQueryKeys } from "@/constants/query-keys.constants";
import statisticService from "@/services/statistic.service";
import { useQuery } from "@tanstack/react-query";
import { FaBoxes, FaCoins, FaDove } from "react-icons/fa";
import { useMemo } from "react";
import { IStatisticItem } from "@/types/statistic.types";

const useStatistic = () => {
	const { data: statistic, isLoading } = useQuery({
		queryKey: financeQueryKeys.statistics(),
		queryFn: () => statisticService.get(),
	});

	const statistics: IStatisticItem[] = useMemo(
		() => [
			{
				title: "Общий доход",
				content: `${
					statistic ? statistic.totalIncomesAmount.toLocaleString("ru") : 0
				} ₽`,
				icon: FaCoins,
			},
			{
				title: "Источников дохода",
				content: `${
					statistic ? statistic.totalIncomes.toLocaleString("ru") : 0
				} шт.`,
				icon: FaBoxes,
			},

			{
				title: "Нераспределено",
				content: `${
					statistic ? statistic.freePercentage.toLocaleString("ru") : 0
				}%`,
				icon: FaDove,
			},
		],
		[statistic]
	);

	return { statistics, statuses: { isLoading } };
};

export default useStatistic;
