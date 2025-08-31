import AsyncList from "@/components/AsyncList";
import DashboardWidgetItemSkeleton from "@/components/ui/skeletons/DashboardWidgetItemSkeleton";
import useFetchAllocations from "@/hooks/useFetchAllocations";
import AllocationItem from "./AllocationItem";

const AllocationList = () => {
	const allocationQuery = useFetchAllocations();

	return (
		<AsyncList
			query={allocationQuery}
			loader={<DashboardWidgetItemSkeleton count={3} />}
			renderItem={(allocation) => (
				<AllocationItem key={allocation.id} item={allocation} />
			)}
		/>
	);
};

export default AllocationList;
