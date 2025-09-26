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
import { IAllocationColor } from "@/types/allocation.types";

const useEditAllocationColor = (
	colorItem: IAllocationColor,
	closeCallback: () => void
) => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: (data: AllocationColorSchema) =>
			allocationColorService.edit({ id: colorItem.id, data }),
		onSuccess: (response) => {
			toast.success(`Цвет «${response.name}» был успешно изменен`);
			queryClient.invalidateQueries({ queryKey: [financeQueryKeys.all] });
			queryClient.invalidateQueries({ queryKey: [profileQueryKey] });
			closeCallback();
		},
	});

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { isDirty, errors },
	} = useAppForm<AllocationColorSchema>(allocationColorSchema, {
		defaultValues: colorItem,
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

export default useEditAllocationColor;
