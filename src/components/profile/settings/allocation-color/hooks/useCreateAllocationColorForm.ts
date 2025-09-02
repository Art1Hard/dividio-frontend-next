import { useForm } from "react-hook-form";
import {
	allocationColorSchema,
	AllocationColorSchema,
} from "../models/allocation-color.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import allocationColorService from "@/services/allocation-color.service";
import { toast } from "sonner";
import {
	financeQueryKeys,
	profileQueryKey,
} from "@/constants/query-keys.constants";

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
	});

	const {
		register,
		handleSubmit,
		setValue,
		formState: { isDirty, errors },
	} = useForm<AllocationColorSchema>({
		resolver: zodResolver(allocationColorSchema),
		mode: "onTouched",
	});

	useWarnUnsavedChanges(isDirty);

	const submit = handleSubmit((data: AllocationColorSchema) => mutate(data));

	return { register, submit, setValue, states: { errors, isDirty } };
};

export default useCreateAllocationColorForm;
