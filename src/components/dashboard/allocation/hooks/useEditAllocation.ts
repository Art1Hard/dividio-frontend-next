import {
	allocationSchema,
	AllocationSchema,
} from "../models/allocation.schema";
import { isServerError } from "@/utils/server-error.utils";
import { toast } from "sonner";
import { financeQueryKeys } from "@/constants/query-keys.constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import allocationService, {
	type IEditAllocation,
} from "@/services/allocation.service";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import { IAllocation } from "@/types/allocation.types";
import useAppForm from "@/hooks/useAppForm";
import { ERROR_CODE } from "@/constants/error-code.constants";

const useEditAllocation = (
	allocation: IAllocation,
	closeCallback: () => void
) => {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isDirty },
	} = useAppForm<AllocationSchema>(allocationSchema, {
		defaultValues: { ...allocation, colorId: allocation.color.id },
	});

	const selectedColor = watch("colorId");
	useWarnUnsavedChanges(isDirty);

	const queryClient = useQueryClient();
	const { mutate: editAllocation, isPending } = useMutation({
		mutationFn: (data: IEditAllocation) => allocationService.edit(data),
		onSuccess: async (data) => {
			await queryClient.invalidateQueries({ queryKey: financeQueryKeys.all });
			toast.success(`Распределение "${data.title}" успешно изменено`);
			closeCallback();
		},
		onError: (e) => {
			if (isServerError(e)) {
				if (e.response!.data.code === ERROR_CODE.ALLOCATION_LIMIT_EXCEEDED)
					setError("percentage", {
						type: "server",
						message: `Вы не можете ввести более ${
							e.response!.data!.details?.available
						}%`,
					});
			}
		},
	});

	const submit = handleSubmit((data) =>
		editAllocation({ id: allocation.id, data })
	);

	return {
		register,
		submit,
		states: { selectedColor, errors, isDirty, isPending },
	};
};

export default useEditAllocation;
