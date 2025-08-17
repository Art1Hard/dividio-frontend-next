"use client";

import cn from "clsx";
import NavLink from "./NavLink";
import { FaUserCircle } from "react-icons/fa";
import { ROUTES } from "@/config/routes.config";
import useProfile from "@/hooks/useProfile";

const Nav = () => {
	const { profile } = useProfile();

	return (
		<nav>
			<ul className="flex items-center gap-4 text-sm font-semibold">
				<li>
					<NavLink
						href={profile ? ROUTES.PROFILE : ROUTES.SIGN_IN}
						className={cn("flex items-center gap-x-2")}>
						<FaUserCircle size={22} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
