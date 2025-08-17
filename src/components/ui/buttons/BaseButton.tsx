import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

export interface BaseButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: "primary" | "secondary" | "danger";
}

const BaseButton = ({
	color = "primary",
	className,
	children,
	...props
}: BaseButtonProps) => {
	return (
		<button
			type="button"
			className={cn(
				"px-4 py-2 rounded-lg transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-default",
				color === "primary" &&
					"text-white bg-accent hover:bg-accent-hover disabled:hover:bg-accent-disabled font-semibold",
				color === "secondary" &&
					"text-secondary-800 bg-primary-300/50 hover:bg-primary-300 disabled:hover:bg-primary-300/50",
				color === "danger" && "text-white bg-red-600 hover:bg-red-700",
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default BaseButton;
