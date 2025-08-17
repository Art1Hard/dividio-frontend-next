import type { ReactNode } from "react";
import cn from "clsx";
import Link from "next/link";

interface NavLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
	title?: string;
}

const NavLink = ({ href, children, className, title }: NavLinkProps) => {
	return (
		<Link
			title={title}
			href={href}
			className={cn(
				" hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
				className
			)}>
			{children}
		</Link>
	);
};

export default NavLink;
