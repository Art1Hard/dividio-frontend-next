"use client";

import { BaseButtonProps } from "@/components/ui/buttons/BaseButton";
import HeaderButton from "@/components/ui/buttons/HeaderButton";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";

interface ViewSwitcherProps extends BaseButtonProps {
	isChartView: boolean;
}

const ViewSwitcher = ({
	isChartView,
	...props
}: Omit<ViewSwitcherProps, "fullRounded" | "className">) => {
	return (
		<HeaderButton
			smChildren={
				isChartView ? (
					<>
						<HiListBullet size={19} />
						Список
					</>
				) : (
					<>
						<HiOutlineChartPie size={18} />
						Диаграмма
					</>
				)
			}
			children={
				isChartView ? (
					<HiListBullet size={23} className="p-0.5" />
				) : (
					<HiOutlineChartPie size={22} className="p-0.5" />
				)
			}
			{...props}
		/>
	);
};

export default ViewSwitcher;
