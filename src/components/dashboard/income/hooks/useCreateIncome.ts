import { useForm } from "react-hook-form";
import { incomeSchema, IncomeSchema } from "../models/income.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { financeQueryKeys } from "@/constants/query-keys.constants";
import incomeService from "@/services/income.service";
import { toast } from "sonner";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import useAppForm from "@/hooks/useAppForm";

const useCreateIncome = (closeCallback: () => void) => {
	const queryClient = useQueryClient();

	const { mutate: createIncome, isPending } = useMutation({
		mutationFn: (data: IncomeSchema) => incomeService.create(data),
		onSuccess: async (data) => {
			await queryClient.invalidateQueries({ queryKey: financeQueryKeys.all });
			toast.success(`Доход "${data.title}" успешно добавлен`);
			closeCallback();
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useAppForm<IncomeSchema>(incomeSchema, {
		defaultValues: { amount: 1000, title: "" },
	});

	const submit = handleSubmit((data) => createIncome(data));

	useWarnUnsavedChanges(isDirty);

	return { register, submit, states: { errors, isDirty, isPending } };
};

export default useCreateIncome;
