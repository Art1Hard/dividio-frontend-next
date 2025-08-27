import BaseButton, { BaseButtonProps } from "../buttons/BaseButton";

const SubmitButton = ({
	children,
	...props
}: Omit<BaseButtonProps, "type">) => {
	return (
		<BaseButton className="w-full" type="submit" {...props}>
			{children}
		</BaseButton>
	);
};

export default SubmitButton;
