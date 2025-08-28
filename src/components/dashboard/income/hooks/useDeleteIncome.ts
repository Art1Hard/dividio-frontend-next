import { financeQueryKeys } from "@/constants/query-keys.constants";
import incomeService from "@/services/income.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useDeleteIncome = () => {
	const queryClient = useQueryClient();

	const { mutate: deleteIncome } = useMutation({
		mutationFn: (id: string) => incomeService.delete(id),
		onSuccess: async (data) => {
			await queryClient.invalidateQueries({ queryKey: financeQueryKeys.all });
			toast.success(`Доход "${data.title}" успешно удален`);
		},
	});

	const deleteHandler = (incomeId: string) =>
		confirm("Вы точно хотите удалить доход?") && deleteIncome(incomeId);

	return { deleteHandler };
};

export default useDeleteIncome;
