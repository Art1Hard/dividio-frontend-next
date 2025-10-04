import { ERROR_CODE } from "@/constants/error-code.constants";
import {
	financeQueryKeys,
	profileQueryKey,
} from "@/constants/query-keys.constants";
import allocationColorService from "@/services/allocation-color.service";
import { isServerError } from "@/utils/server-error.utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useDeleteAllocationColor = () => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: (id: string) => allocationColorService.delete(id),
		onSuccess: (response) => {
			toast.success(`Цвет «${response.name}» успешно удален`);
			queryClient.invalidateQueries({ queryKey: [financeQueryKeys.all] });
			queryClient.invalidateQueries({ queryKey: [profileQueryKey] });
		},
		onError: (e) => {
			if (isServerError(e)) {
				switch (e.response!.data.code) {
					case ERROR_CODE.COLOR_USED:
						toast.error(
							"Вы не можете удалить этот цвет, так как он используется в распределении"
						);
						break;

					case ERROR_CODE.COLOR_MIN_COUNT:
						toast.error("Необходимо оставить хотя бы 3 цвета");
						break;

					default:
						toast.error("Произошла ошибка при удалении цвета");
				}
			}
		},
	});

	return { deleteColor: mutate };
};

export default useDeleteAllocationColor;
