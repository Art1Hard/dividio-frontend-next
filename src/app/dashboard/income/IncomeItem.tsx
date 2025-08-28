import DeleteIncome from "@/components/dashboard/income/delete/DeleteIncome";
import EditIncome from "@/components/dashboard/income/edit/EditIncome";
import DashboardWidgetItem from "@/components/ui/wrappers/item/DashboardWidgetItem";
import { IIncome } from "@/types/income.types";

const IncomeItem = ({ income }: { income: IIncome }) => {
	return (
		<DashboardWidgetItem>
			<DashboardWidgetItem.Header>
				<p className="font-medium mb-1 sm:mb-2">{income.title}</p>
				<p className="text-xl font-bold">
					{income.amount.toLocaleString("ru")} ₽
				</p>
			</DashboardWidgetItem.Header>
			<DashboardWidgetItem.Content>
				<EditIncome income={income} />
				<DeleteIncome id={income.id} />
			</DashboardWidgetItem.Content>
		</DashboardWidgetItem>
	);
};

export default IncomeItem;
