import {
	financeQueryKeys,
	profileQueryKey,
} from "@/constants/query-keys.constants";
import allocationColorService from "@/services/allocation-color.service";
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
	});

	return { deleteColor: mutate };
};

export default useDeleteAllocationColor;
