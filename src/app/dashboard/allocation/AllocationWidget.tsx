"use client";

import DashboardWidgetWrapper from "@/components/ui/wrappers/DashboardWidgetWrapper";
import { FaChartPie } from "react-icons/fa";
import ViewSwitcher from "@/components/dashboard/allocation/ViewSwitcher";
import AllocationList from "@/components/dashboard/allocation/list/AllocationList";
import useFetchAllocations from "./hooks/useFetchAllocations";
import CreateAllocation from "@/components/dashboard/allocation/create/CreateAllocation";

const AllocationWidget = () => {
	const { allocationData } = useFetchAllocations();

	return (
		<DashboardWidgetWrapper
			title="Распределение"
			icon={<FaChartPie size={20} className="text-violet-500" />}
			headerButton={<ViewSwitcher />}>
			<div className="space-y-5 mb-6">
				<AllocationList
					data={allocationData ? allocationData.allocations : []}
				/>
			</div>
			<CreateAllocation />
		</DashboardWidgetWrapper>
	);
};

export default AllocationWidget;
