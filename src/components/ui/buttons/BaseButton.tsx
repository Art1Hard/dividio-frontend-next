import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import cn from "clsx";
import Link from "next/link";

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href?: string;
		color?: "primary" | "secondary" | "danger";
		fullRounded?: boolean;
	};

const BaseButton = ({
	href,
	color = "primary",
	className,
	children,
	fullRounded,
	...props
}: BaseButtonProps) => {
	const classes = cn(
		"py-2 transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-default",
		fullRounded ? "px-2 rounded-full" : "rounded-lg px-4",
		color === "primary" &&
			"text-white bg-accent hover:bg-accent-hover disabled:hover:bg-accent-disabled font-semibold",
		color === "secondary" &&
			"text-secondary-800 bg-primary-400/30 hover:bg-primary-400/50 disabled:hover:bg-primary-400/30",
		color === "danger" && "text-white bg-red-600 hover:bg-red-700",
		className
	);

	if (href) {
		return (
			<Link
				href={href}
				className={classes}
				{...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type="button"
			className={classes}
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
			{children}
		</button>
	);
};

export default BaseButton;
