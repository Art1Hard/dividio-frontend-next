import { financeQueryKeys } from "@/constants/query-keys.constants";
import incomeService from "@/services/income.service";
import { IAsyncQuery } from "@/types/async-query.types";
import { IIncome } from "@/types/income.types";
import { useQuery } from "@tanstack/react-query";

const useFetchIncomes = (): IAsyncQuery<IIncome> => {
	const { data, isLoading, isError } = useQuery({
		queryKey: financeQueryKeys.incomes(),
		queryFn: () => incomeService.getAll(),
	});

	return { data, isLoading, isError };
};

export default useFetchIncomes;
