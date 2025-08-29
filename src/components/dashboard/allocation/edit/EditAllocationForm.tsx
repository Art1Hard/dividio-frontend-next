import ColorPicker from "@/components/ui/form/ColorPicker";
import Input from "@/components/ui/form/Input";
import SubmitButton from "@/components/ui/form/SubmitButton";
import useEditAllocation from "../hooks/useEditAllocation";
import { IAllocation } from "@/types/allocation.types";

interface EditAllocationFormProps {
	item: IAllocation;
	onClose: () => void;
}

const EditAllocationForm = ({ item, onClose }: EditAllocationFormProps) => {
	const { register, submit, states } = useEditAllocation(item, onClose);

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
				{...register("color")}
				error={states.errors.color}
			/>

			<SubmitButton disabled={!states.isDirty || states.isPending}>
				{states.isPending ? "Сохранение..." : "Сохранить"}
			</SubmitButton>
		</form>
	);
};

export default EditAllocationForm;
