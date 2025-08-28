import DeleteButton from "@/components/ui/buttons/DeleteButton";
import EditButton from "@/components/ui/buttons/EditButton";
import ProgressBar from "@/components/ui/ProgressBar";
import { DashboardWidgetItem } from "@/components/ui/wrappers/item";
import { IAllocation } from "@/types/allocation.types";
import DeleteAllocation from "../delete/DeleteAllocation";

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
					color={item.color}
				/>
			</DashboardWidgetItem.Header>
			<DashboardWidgetItem.Content>
				<EditButton /> <DeleteAllocation allocationId={item.id} />
			</DashboardWidgetItem.Content>
		</DashboardWidgetItem>
	);
};

export default AllocationItem;
