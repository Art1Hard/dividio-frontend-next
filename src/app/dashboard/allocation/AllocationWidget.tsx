"use client";

import DashboardWidgetWrapper from "@/components/ui/wrappers/DashboardWidgetWrapper";
import { FaChartPie } from "react-icons/fa";
import ViewSwitcher from "@/components/dashboard/allocation/ViewSwitcher";
import AllocationList from "@/components/dashboard/allocation/list/AllocationList";
import CreateAllocation from "@/components/dashboard/allocation/create/CreateAllocation";
import useChartView from "./hooks/useChartView";
import AllocationChart from "@/components/dashboard/allocation/chart/AllocationChart";
import useFetchAllocations from "@/hooks/useFetchAllocations";

const AllocationWidget = () => {
	const { isChartView, toggleChartView } = useChartView();
	const { data } = useFetchAllocations();

	return (
		<DashboardWidgetWrapper
			title="Распределение"
			icon={<FaChartPie size={20} className="text-violet-500" />}
			headerButton={
				<ViewSwitcher
					disabled={!data || data.length <= 1}
					isChartView={isChartView}
					onClick={toggleChartView}
				/>
			}>
			<div className="space-y-5 mb-6">
				{isChartView ? <AllocationChart /> : <AllocationList />}
			</div>
			<CreateAllocation />
		</DashboardWidgetWrapper>
	);
};

export default AllocationWidget;
