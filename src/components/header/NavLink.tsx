import type { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
	title?: string;
}

const NavLink = ({ href, children, className, title }: NavLinkProps) => {
	return (
		<Link title={title} href={href} className={className}>
			{children}
		</Link>
	);
};

export default NavLink;
