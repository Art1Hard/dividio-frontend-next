import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";
import cn from "clsx";
import useProfile from "@/hooks/useProfile";

interface ColorPickerProps {
	selectedColor: string;
	error?: FieldError;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
	({ selectedColor, error, ...rest }, ref) => {
		const { profile, states } = useProfile();

		return (
			<div>
				<label className="block mb-2 text-sm font-medium">Выберите цвет</label>
				<div className="relative flex gap-3 overflow-x-auto scrollbar">
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
								className={cn(
									"w-8 h-8 rounded-full border-2 transition",
									selectedColor === color.id
										? "border-secondary-700"
										: "border-transparent"
								)}
								style={{ backgroundColor: color.value }}
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
