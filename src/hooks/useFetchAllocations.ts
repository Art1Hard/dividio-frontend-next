import { financeQueryKeys } from "@/constants/query-keys.constants";
import allocationService from "@/services/allocation.service";
import { IAllocation } from "@/types/allocation.types";
import { IAsyncQuery } from "@/types/async-query.types";
import { useQuery } from "@tanstack/react-query";

const useFetchAllocations = (): IAsyncQuery<IAllocation> => {
	const { data, isLoading, isError } = useQuery({
		queryKey: financeQueryKeys.allocations(),
		queryFn: () => allocationService.getAll(),
	});

	return { data: data?.allocations, isLoading, isError };
};

export default useFetchAllocations;
