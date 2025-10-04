import { ERROR_CODE } from "@/constants/error-code.constants";
import { financeQueryKeys } from "@/constants/query-keys.constants";
import incomeService from "@/services/income.service";
import { isServerError } from "@/utils/server-error.utils";
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
		onError: (e) => {
			if (isServerError(e)) {
				if (e.response!.data.code === ERROR_CODE.LAST_INCOME_VALIDATION_ERROR)
					toast.error(
						"Вы не можете удалить последний доход пока есть распределения!"
					);
			}
		},
	});

	const deleteHandler = (incomeId: string) => deleteIncome(incomeId);

	return { deleteHandler };
};

export default useDeleteIncome;
