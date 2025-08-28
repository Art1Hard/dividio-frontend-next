import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incomeSchema, IncomeSchema } from "../models/income.schema";
import incomeService from "@/services/income.service";
import { toast } from "sonner";
import { financeQueryKeys } from "@/constants/query-keys.constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IIncome } from "@/types/income.types";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";

const useEditIncome = (income: IIncome, closeCallback: () => void) => {
	const queryClient = useQueryClient();

	const { mutate: editIncome, isPending } = useMutation({
		mutationFn: ({ id, data }: { id: string; data: IncomeSchema }) =>
			incomeService.edit(id, data),
		onSuccess: async (data) => {
			await queryClient.invalidateQueries({ queryKey: financeQueryKeys.all });
			toast.success(`Доход "${data.title}" успешно обновлен`);
			closeCallback();
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<IncomeSchema>({
		resolver: zodResolver(incomeSchema),
		mode: "onTouched",
		defaultValues: income,
	});

	const submit = handleSubmit((data) => editIncome({ id: income.id, data }));

	useWarnUnsavedChanges(isDirty);

	return { register, submit, states: { errors, isDirty, isPending } };
};

export default useEditIncome;
