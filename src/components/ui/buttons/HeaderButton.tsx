import type { JSX } from "react";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import useBreakpoint from "@/hooks/useBreakpoint";

interface HeaderButtonProps extends BaseButtonProps {
	smChildren: JSX.Element;
}

const HeaderButton = ({
	smChildren,
	children,
	...props
}: Omit<HeaderButtonProps, "fullRounded" | "className">) => {
	const breakpoint = useBreakpoint();

	if (!breakpoint) return null;

	return (
		<BaseButton
			fullRounded={breakpoint !== "sm"}
			className="flex items-center gap-2"
			{...props}>
			{breakpoint === "sm" ? smChildren : children}
		</BaseButton>
	);
};

export default HeaderButton;
