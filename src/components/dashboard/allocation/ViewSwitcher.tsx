"use client";

import HeaderButton from "@/components/ui/buttons/HeaderButton";
import { HiOutlineChartPie } from "react-icons/hi";

const ViewSwitcher = () => {
	return (
		<HeaderButton
			smChildren={
				<>
					<HiOutlineChartPie size={18} />
					Диаграмма
				</>
			}
			children={<HiOutlineChartPie size={22} className="p-0.5" />}
		/>
	);
};

export default ViewSwitcher;
