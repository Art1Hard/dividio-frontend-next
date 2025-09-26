import { HexColorPicker } from "react-colorful";
import BaseButton from "@/components/ui/buttons/BaseButton";
import Input from "@/components/ui/form/Input";
import { IAllocationColor } from "@/types/allocation.types";
import useEditAllocationColor from "../hooks/useEditAllocationColor";

interface EditAllocationColorFormProps {
	colorItem: IAllocationColor;
	onClose: () => void;
}

const EditAllocationColorForm = ({
	colorItem,
	onClose,
}: EditAllocationColorFormProps) => {
	const { register, submit, states } = useEditAllocationColor(
		colorItem,
		onClose
	);

	return (
		<form onSubmit={submit}>
			<div className="space-y-4 mb-4">
				<Input
					register={register}
					name="name"
					errors={states.errors}
					id="colorName"
					label="Название:"
					placeholder="Пурпурный"
				/>

				<Input
					register={register}
					name="value"
					errors={states.errors}
					id="colorValue"
					label="Цвет:"
					type="color"
					color={states.color.value}
					onColorChange={states.color.setValue}
				/>
				<HexColorPicker
					color={states.color.value}
					onChange={states.color.setValue}
					className="!w-full !h-40"
				/>
			</div>

			<BaseButton
				type="submit"
				disabled={!states.isDirty}
				className="w-full mt-4 font-semibold">
				Сохранить
			</BaseButton>
		</form>
	);
};

export default EditAllocationColorForm;
