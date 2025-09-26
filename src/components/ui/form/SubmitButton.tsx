import clsx from "clsx";
import BaseButton, { BaseButtonProps } from "../buttons/BaseButton";

const SubmitButton = ({
	children,
	className,
	...props
}: Omit<BaseButtonProps, "type">) => {
	return (
		<BaseButton className={clsx("w-full", className)} type="submit" {...props}>
			{children}
		</BaseButton>
	);
};

export default SubmitButton;
