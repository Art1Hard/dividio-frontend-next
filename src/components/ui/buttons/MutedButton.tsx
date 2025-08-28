import clsx from "clsx";
import { BaseButtonProps } from "./BaseButton";

export interface MutedButtonProps extends BaseButtonProps {}

const MutedButton = ({
	color = "primary",
	className,
	children,
	fullRounded,
	...props
}: MutedButtonProps) => {
	return (
		<button
			type="button"
			className={clsx(
				"text-secondary-800 py-3 bg-slate-300 transition-colors hover:text-white cursor-pointer sm:py-2",
				fullRounded ? "rounded-full px-3" : "rounded-md px-2",
				color === "primary" &&
					"hover:bg-accent-hover disabled:hover:bg-accent-disabled font-semibold",
				color === "secondary" &&
					"bg-primary-300/50 hover:bg-primary-300 disabled:hover:bg-primary-300/50",
				color === "danger" && "hover:bg-red-700",
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default MutedButton;
