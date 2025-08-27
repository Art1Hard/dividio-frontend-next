import { financeQueryKeys } from "@/constants/query-keys.constants";
import statisticService from "@/services/statistic.service";
import { useQuery } from "@tanstack/react-query";

const useStatistic = () => {
	const { data: statistic, isLoading } = useQuery({
		queryKey: financeQueryKeys.statistics(),
		queryFn: () => statisticService.get(),
	});

	return { statistic, statuses: { isLoading } };
};

export default useStatistic;
