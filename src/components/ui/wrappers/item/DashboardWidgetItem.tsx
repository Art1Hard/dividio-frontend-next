import { FC } from "react";
import { DashboardWrapperProps } from "./interfaces/dasboard-wrapper.interface";
import WrapperItemContent from "./WrapperItemContent";
import WrapperItemHeader from "./WrapperItemHeader";
import { dashboardWidgetItemAnimation } from "@/constants/animation.constants";
import { motion, useReducedMotion } from "framer-motion";

type DashboardWidgetItemType = FC<DashboardWrapperProps> & {
	Header: typeof WrapperItemHeader;
	Content: typeof WrapperItemContent;
};

const DashboardWidgetItem: DashboardWidgetItemType = ({ children }) => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className="flex flex-col gap-x-4 justify-between bg-primary-300/50 px-4 py-3 rounded-lg shadow-sm sm:flex-row sm:items-center"
			layout={!shouldReduceMotion}
			variants={
				shouldReduceMotion ? undefined : dashboardWidgetItemAnimation.variants
			}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={dashboardWidgetItemAnimation.transition}>
			{children}
		</motion.div>
	);
};

DashboardWidgetItem.Header = WrapperItemHeader;
DashboardWidgetItem.Content = WrapperItemContent;

export default DashboardWidgetItem;
