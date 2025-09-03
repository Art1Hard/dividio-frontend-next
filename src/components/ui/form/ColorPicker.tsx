import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";
import useProfile from "@/hooks/useProfile";
import { hexToRgb } from "@/utils/hexToRgb";

interface ColorPickerProps {
	selectedColor: string;
	error?: FieldError;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
	({ selectedColor, error, ...rest }, ref) => {
		const { profile, states } = useProfile();

		return (
			<div>
				<label className="block text-sm font-medium">Выберите цвет</label>
				<div className="relative flex gap-2 overflow-x-auto p-2 scrollbar">
					{profile?.colors.map((color) => (
						<label key={color.id} className="cursor-pointer">
							<input
								type="radio"
								value={color.id}
								ref={ref}
								{...rest}
								className="sr-only"
							/>
							<div
								className="w-9 h-9 rounded-full"
								style={{
									backgroundColor: color.value,
									boxShadow:
										selectedColor === color.id
											? `0 0 5px 1px rgba(${hexToRgb(color.value)}, 0.7)`
											: "none",
								}}
								title={color.name}
							/>
						</label>
					))}

					{error && error.message && (
						<p className="absolute bottom-[-25px] text-[14px] text-red-500 left-0">
							{error.message}
						</p>
					)}
				</div>
			</div>
		);
	}
);

ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
