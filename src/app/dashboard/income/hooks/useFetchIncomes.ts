import { financeQueryKeys } from "@/constants/query-keys.constants";
import incomeService from "@/services/income.service";
import { useQuery } from "@tanstack/react-query";

const useFetchIncomes = () => {
	const { data: incomeData, isLoading } = useQuery({
		queryKey: financeQueryKeys.incomes(),
		queryFn: () => incomeService.getAll(),
	});

	return { incomeData, statuses: { isLoading } };
};

export default useFetchIncomes;
