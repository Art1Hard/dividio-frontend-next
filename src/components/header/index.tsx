import { TiChartBar } from "react-icons/ti";
import Nav from "./Nav";
import NavLink from "./NavLink";
import { ROUTES } from "@/config/routes.config";

const Header = () => {
	return (
		<header className="bg-primary-100 shadow-md relative z-10">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<div className="text-xl font-semibold tracking-wide">
					<NavLink href={ROUTES.HOME} className="flex items-center gap-1">
						<TiChartBar size={25} /> Dividio
					</NavLink>
				</div>

				<div className="flex gap-x-8 items-center">
					<Nav />
				</div>
			</div>
		</header>
	);
};

export default Header;
