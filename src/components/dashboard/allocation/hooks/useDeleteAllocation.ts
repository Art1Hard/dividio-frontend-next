import { financeQueryKeys } from "@/constants/query-keys.constants";
import allocationService from "@/services/allocation.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useDeleteAllocation = () => {
	const queryClient = useQueryClient();

	const { mutate: deleteAllocation } = useMutation({
		mutationFn: (id: string) => allocationService.delete(id),
		onSuccess: async (data) => {
			await queryClient.invalidateQueries({ queryKey: financeQueryKeys.all });
			toast.success(`Распределение "${data.title}" успешно удалено`);
		},
	});

	const deleteHandler = (allocationId: string) =>
		confirm("Вы точно хотите удалить распределение?") &&
		deleteAllocation(allocationId);

	return { deleteHandler };
};

export default useDeleteAllocation;
