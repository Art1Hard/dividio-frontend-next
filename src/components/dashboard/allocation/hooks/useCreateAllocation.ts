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
import { ERROR_CODE } from "@/constants/error-code.constants";
import useProfile from "@/hooks/useProfile";

const useCreateAllocation = (closeCallback: () => void) => {
	const { profile } = useProfile();

	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isDirty },
	} = useAppForm<AllocationSchema>(allocationSchema, {
		defaultValues: { percentage: 5, title: "", colorId: profile?.colors[0].id },
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
				switch (e.response!.data.code) {
					case ERROR_CODE.ALLOCATION_LIMIT_EXCEEDED:
						setError("percentage", {
							type: "server",
							message: `Вы не можете ввести более ${
								e.response!.data!.details?.available
							}%`,
						});
						break;

					default:
						toast.error(e.response!.data.message);
				}
			}
		},
	});

	const submit = handleSubmit((data) => createAllocation(data));

	return {
		register,
		submit,
		states: { selectedColor, errors, isDirty, isPending },
	};
};

export default useCreateAllocation;
