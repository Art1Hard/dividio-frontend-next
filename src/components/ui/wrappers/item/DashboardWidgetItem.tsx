import { FC } from "react";
import { DashboardWrapperProps } from "./interfaces/dasboard-wrapper.interface";
import WrapperItemContent from "./WrapperItemContent";
import WrapperItemHeader from "./WrapperItemHeader";

type DashboardWidgetItemType = FC<DashboardWrapperProps> & {
	Header: typeof WrapperItemHeader;
	Content: typeof WrapperItemContent;
};

const DashboardWidgetItem: DashboardWidgetItemType = ({ children }) => {
	return (
		<div className="flex flex-col gap-x-4 justify-between bg-slate-300/50 px-4 py-3 rounded-lg shadow-sm sm:flex-row sm:items-center">
			{children}
		</div>
	);
};

DashboardWidgetItem.Header = WrapperItemHeader;
DashboardWidgetItem.Content = WrapperItemContent;

export default DashboardWidgetItem;
