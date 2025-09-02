import Input from "@/components/ui/form/Input";
import SubmitButton from "@/components/ui/form/SubmitButton";
import useCreateAllocation from "../hooks/useCreateAllocation";
import ColorPicker from "@/components/ui/form/ColorPicker";

interface CreateAllocationFormProps {
	onClose: () => void;
}

const CreateAllocationForm = ({ onClose }: CreateAllocationFormProps) => {
	const { register, submit, states } = useCreateAllocation(onClose);

	return (
		<form onSubmit={submit} className="space-y-4">
			<Input
				register={register}
				name="title"
				label="Название"
				id="title"
				placeholder="Валюта"
				errors={states.errors}
			/>

			<Input
				register={register}
				name="percentage"
				type="number"
				label="Процент"
				id="percentage"
				placeholder="35"
				errors={states.errors}
			/>

			<ColorPicker
				selectedColor={states.selectedColor}
				{...register("colorId")}
				error={states.errors.colorId}
			/>

			<SubmitButton disabled={!states.isDirty || states.isPending}>
				{states.isPending ? "Добавление..." : "Добавить"}
			</SubmitButton>
		</form>
	);
};

export default CreateAllocationForm;
