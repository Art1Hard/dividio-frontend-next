"use client";

import DashboardWidgetWrapper from "@/components/ui/wrappers/DashboardWidgetWrapper";
import { FaChartPie } from "react-icons/fa";
import ViewSwitcher from "@/components/dashboard/allocation/ViewSwitcher";
import AllocationList from "@/components/dashboard/allocation/list/AllocationList";
import CreateAllocation from "@/components/dashboard/allocation/create/CreateAllocation";
import useChartView from "./hooks/useChartView";
import AllocationChart from "@/components/dashboard/allocation/chart/AllocationChart";

const AllocationWidget = () => {
	const { isChartView, toggleChartView } = useChartView();

	return (
		<DashboardWidgetWrapper
			title="Распределение"
			icon={<FaChartPie size={20} className="text-violet-500" />}
			headerButton={
				<ViewSwitcher isChartView={isChartView} onClick={toggleChartView} />
			}>
			<div className="space-y-5 mb-6">
				{isChartView ? <AllocationChart /> : <AllocationList />}
			</div>
			<CreateAllocation />
		</DashboardWidgetWrapper>
	);
};

export default AllocationWidget;
