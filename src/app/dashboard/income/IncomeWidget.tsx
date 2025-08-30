import { AiFillGold } from "react-icons/ai";
import CreateIncome from "@/components/dashboard/income/create/CreateIncome";
import DashboardWidgetWrapper from "@/components/ui/wrappers/DashboardWidgetWrapper";
import IncomeList from "@/components/dashboard/income/IncomeList";

const IncomeWidget = () => {
	return (
		<DashboardWidgetWrapper
			title="Все доходы"
			icon={<AiFillGold size={24} className="text-amber-500" />}
			headerButton={<CreateIncome />}>
			<IncomeList />
		</DashboardWidgetWrapper>
	);
};

export default IncomeWidget;
