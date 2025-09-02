import ProgressBar from "@/components/ui/ProgressBar";
import { DashboardWidgetItem } from "@/components/ui/wrappers/item";
import { IAllocation } from "@/types/allocation.types";
import DeleteAllocation from "../delete/DeleteAllocation";
import EditAllocation from "../edit/EditAllocation";

interface AllocationItemProps {
	item: IAllocation;
}

const AllocationItem = ({ item }: AllocationItemProps) => {
	return (
		<DashboardWidgetItem>
			<DashboardWidgetItem.Header>
				<ProgressBar
					label={item.title}
					percent={item.percentage}
					amount={item.amount}
					color={item.color.value}
				/>
			</DashboardWidgetItem.Header>
			<DashboardWidgetItem.Content>
				<EditAllocation item={item} />{" "}
				<DeleteAllocation allocationId={item.id} />
			</DashboardWidgetItem.Content>
		</DashboardWidgetItem>
	);
};

export default AllocationItem;
