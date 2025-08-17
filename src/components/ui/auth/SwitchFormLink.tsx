import clsx from "clsx";
import Link from "next/link";

interface SwitchFormLinkProps {
	href: string;
	className?: string;
	classNameInner?: string;
	prefix?: string;
	children: string;
}

const SwitchFormLink = ({
	href,
	className,
	classNameInner,
	prefix,
	children,
}: SwitchFormLinkProps) => {
	return (
		<p className={clsx("text-center text-sm text-secondary-700", className)}>
			{prefix}{" "}
			<Link
				href={href}
				className={clsx("text-accent hover:underline", classNameInner)}>
				{children}
			</Link>
		</p>
	);
};

export default SwitchFormLink;
