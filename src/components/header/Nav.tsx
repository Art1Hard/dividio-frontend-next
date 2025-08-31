"use client";

import cn from "clsx";
import NavLink from "./NavLink";
import { FaUserCircle } from "react-icons/fa";
import { ROUTES } from "@/config/routes.config";
import useProfile from "@/hooks/useProfile";
import Avatar from "../ui/auth/Avatar";

const Nav = () => {
	const { profile, states } = useProfile();

	return (
		<nav>
			<ul className="flex items-center gap-4 text-sm font-semibold">
				<li>
					<NavLink
						href={profile ? ROUTES.PROFILE : ROUTES.SIGN_IN}
						className={cn("flex items-center gap-x-2")}>
						{profile ? (
							<div className="flex items-center gap-x-2">
								<div className="hidden flex-col items-end sm:flex">
									<h3>{profile.name}</h3>
									<p className="text-xs">{profile.email}</p>
								</div>

								<Avatar
									bgColor="bg-secondary-950"
									textColor="text-primary-100"
									size={32}
									name={profile.name ? profile.name : profile.email}
								/>
							</div>
						) : (
							!states.isLoading && <span className="text-base">Войти</span>
						)}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
