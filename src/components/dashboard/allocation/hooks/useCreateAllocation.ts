import { financeQueryKeys } from "@/constants/query-keys.constants";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import allocationService from "@/services/allocation.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
	allocationSchema,
	AllocationSchema,
} from "../models/allocation.schema";
import { isServerError } from "@/utils/server-error.utils";
import useAppForm from "@/hooks/useAppForm";

const useCreateAllocation = (closeCallback: () => void) => {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isDirty },
	} = useAppForm<AllocationSchema>(allocationSchema, {
		defaultValues: { percentage: 5, title: "", colorId: "" },
	});

	const selectedColor = watch("colorId");
	useWarnUnsavedChanges(isDirty);

	const queryClient = useQueryClient();
	const { mutate: createAllocation, isPending } = useMutation({
		mutationFn: (data: AllocationSchema) => allocationService.create(data),
		onSuccess: async (data) => {
			await queryClient.invalidateQueries({ queryKey: financeQueryKeys.all });
			toast.success(`Распределение "${data.title}" успешно добавлено`);
			closeCallback();
		},
		onError: (e) => {
			if (isServerError(e)) {
				if (e.response!.data.code === "ALLOCATION_LIMIT_EXCEEDED")
					setError("percentage", {
						type: "server",
						message: `Вы не можете ввести более ${
							e.response!.data!.details?.available
						}%`,
					});
			}
		},
	});

	const submit = handleSubmit((data) => {
		console.log(data);
		createAllocation(data);
	});

	return {
		register,
		submit,
		states: { selectedColor, errors, isDirty, isPending },
	};
};

export default useCreateAllocation;
