import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";
import cn from "clsx";
import { progressColors } from "@/constants/colors";

interface ColorPickerProps {
	selectedColor: string;
	error?: FieldError;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
	({ selectedColor, error, ...rest }, ref) => {
		return (
			<div>
				<label className="block mb-2 text-sm font-medium">Выберите цвет</label>
				<div className="relative flex gap-3 overflow-x-auto scrollbar">
					{Object.keys(progressColors).map((color) => (
						<label key={color} className="cursor-pointer">
							<input
								type="radio"
								value={color}
								ref={ref}
								{...rest}
								className="sr-only"
							/>
							<div
								className={cn(
									"w-8 h-8 rounded-full border-2 transition",
									selectedColor === color
										? "border-secondary-700"
										: "border-transparent",
									`bg-${color}-500`
								)}
								style={{ backgroundColor: progressColors[color] }}
								title={color}></div>
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
