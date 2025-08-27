import Input from "@/components/ui/form/Input";
import useCreateIncome from "../hooks/useCreateIncome";
import SubmitButton from "@/components/ui/form/SubmitButton";

const CreateIncomeForm = ({ onClose }: { onClose: () => void }) => {
	const {
		register,
		submit,
		states: { errors, isDirty, isPending },
	} = useCreateIncome(onClose);

	return (
		<form onSubmit={submit} className="space-y-4">
			<Input
				register={register}
				name="title"
				label="Название"
				id="title"
				placeholder="Дизайнер"
				errors={errors}
			/>

			<Input
				register={register}
				name="amount"
				type="number"
				label="Сумма"
				id="amount"
				placeholder="1000"
				errors={errors}
			/>

			<SubmitButton disabled={!isDirty || isPending}>
				{isPending ? "Добавление..." : "Добавить"}
			</SubmitButton>
		</form>
	);
};

export default CreateIncomeForm;
