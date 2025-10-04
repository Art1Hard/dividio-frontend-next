import {
	allocationColorSchema,
	AllocationColorSchema,
} from "../models/allocation-color.schema";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import allocationColorService from "@/services/allocation-color.service";
import { toast } from "sonner";
import {
	financeQueryKeys,
	profileQueryKey,
} from "@/constants/query-keys.constants";
import useAppForm from "@/hooks/useAppForm";
import { isServerError } from "@/utils/server-error.utils";
import { ERROR_CODE } from "@/constants/error-code.constants";

const useCreateAllocationColorForm = (closeCallback: () => void) => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: (data: AllocationColorSchema) =>
			allocationColorService.create(data),
		onSuccess: (response) => {
			toast.success(`Цвет «${response.name}» успешно добавлен`);
			queryClient.invalidateQueries({ queryKey: [financeQueryKeys.all] });
			queryClient.invalidateQueries({ queryKey: [profileQueryKey] });
			closeCallback();
		},
		onError: (e) => {
			if (isServerError(e)) {
				if (e.response!.data.code === ERROR_CODE.COLOR_MAX_COUNT)
					toast.error("Вы не можете добавить более 10 цветов");
			}
		},
	});

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { isDirty, errors },
	} = useAppForm<AllocationColorSchema>(allocationColorSchema, {
		defaultValues: { name: "", value: "#fff" },
	});

	useWarnUnsavedChanges(isDirty);

	const color = watch("value");

	const changeColor = (newColor: string) => {
		setValue("value", newColor, { shouldDirty: true, shouldValidate: true });
	};

	const submit = handleSubmit((data: AllocationColorSchema) => mutate(data));

	return {
		register,
		submit,
		states: { errors, isDirty, color: { value: color, setValue: changeColor } },
	};
};

export default useCreateAllocationColorForm;
