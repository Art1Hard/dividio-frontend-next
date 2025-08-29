import { financeQueryKeys } from "@/constants/query-keys.constants";
import allocationService from "@/services/allocation.service";
import { useQuery } from "@tanstack/react-query";

const useFetchAllocations = () => {
	const { data: allocationData, isLoading } = useQuery({
		queryKey: financeQueryKeys.allocations(),
		queryFn: () => allocationService.getAll(),
	});

	return { allocationData, statuses: { isLoading } };
};

export default useFetchAllocations;
