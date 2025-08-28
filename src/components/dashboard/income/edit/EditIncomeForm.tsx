import Input from "@/components/ui/form/Input";
import SubmitButton from "@/components/ui/form/SubmitButton";
import useEditIncome from "../hooks/useEditIncome";
import { IIncome } from "@/types/income.types";

interface EditIncomeFormProps {
	income: IIncome;
	onClose: () => void;
}

const EditIncomeForm = ({ onClose, income }: EditIncomeFormProps) => {
	const { register, submit, states } = useEditIncome(income, onClose);

	return (
		<form onSubmit={submit} className="space-y-4">
			<Input
				register={register}
				name="title"
				label="Название"
				id="title"
				placeholder="Дизайнер"
				errors={states.errors}
			/>

			<Input
				register={register}
				name="amount"
				type="number"
				label="Сумма"
				id="amount"
				placeholder="1000"
				errors={states.errors}
			/>

			<SubmitButton disabled={!states.isDirty || states.isPending}>
				{states.isPending ? "Добавление..." : "Добавить"}
			</SubmitButton>
		</form>
	);
};

export default EditIncomeForm;
