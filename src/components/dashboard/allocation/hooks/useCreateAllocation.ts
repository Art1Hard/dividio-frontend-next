import { financeQueryKeys } from "@/constants/query-keys.constants";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import allocationService from "@/services/allocation.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
	allocationSchema,
	AllocationSchema,
} from "../models/allocation.schema";
import { isServerError } from "@/utils/server-error.utils";

const useCreateAllocation = (closeCallback: () => void) => {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isDirty },
	} = useForm<AllocationSchema>({
		resolver: zodResolver(allocationSchema),
		mode: "onTouched",
		defaultValues: { percentage: 5, title: "", color: "gray" },
	});
	const selectedColor = watch("color");
	useWarnUnsavedChanges(isDirty);

	const queryClient = useQueryClient();
	const { mutate: createIncome, isPending } = useMutation({
		mutationFn: (data: AllocationSchema) => allocationService.create(data),
		onSuccess: async (data) => {
			await queryClient.invalidateQueries({ queryKey: financeQueryKeys.all });
			toast.success(`Распределение "${data.title}" успешно добавлено`);
			closeCallback();
		},
		onError: (e) => {
			console.log(e);
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

	const submit = handleSubmit((data) => createIncome(data));

	return {
		register,
		submit,
		states: { selectedColor, errors, isDirty, isPending },
	};
};

export default useCreateAllocation;
