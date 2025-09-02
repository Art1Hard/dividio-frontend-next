import { HexColorInput, HexColorPicker } from "react-colorful";
import BaseButton from "@/components/ui/buttons/BaseButton";
import Input from "@/components/ui/form/Input";
import useCreateAllocationColorForm from "../hooks/useCreateAllocationColorForm";
import { useEffect, useState } from "react";
import clsx from "clsx";

const CreateAllocationColorForm = ({ onClose }: { onClose: () => void }) => {
	const { register, submit, setValue, states } =
		useCreateAllocationColorForm(onClose);
	const [color, setColor] = useState("#fff");

	// Синхронизируем picker и input с react-hook-form
	useEffect(() => {
		setValue("value", color, { shouldDirty: true, shouldValidate: true });
	}, [color, setValue]);

	// Синхронизируем color при ручном вводе в HexColorInput
	const handleInputChange = (newColor: string) => {
		setColor(newColor);
	};

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
					color={color}
					onColorChange={setColor}
				/>
				<HexColorPicker
					color={color}
					onChange={setColor}
					className="!w-full !h-40"
				/>
			</div>

			<BaseButton
				type="submit"
				disabled={!states.isDirty}
				className="w-full mt-4 font-semibold">
				Добавить
			</BaseButton>
		</form>
	);
};

export default CreateAllocationColorForm;
