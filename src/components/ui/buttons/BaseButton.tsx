import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

export interface BaseButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: "primary" | "secondary" | "danger";
	fullRounded?: boolean;
}

const BaseButton = ({
	color = "primary",
	className,
	children,
	fullRounded,
	...props
}: BaseButtonProps) => {
	return (
		<button
			type="button"
			className={cn(
				"py-2 transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-default",
				fullRounded ? "px-2 rounded-full" : "rounded-lg px-4",
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
