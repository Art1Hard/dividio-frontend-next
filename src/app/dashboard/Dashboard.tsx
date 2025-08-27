import DashboardHead from "@/components/dashboard/DashboardHead";
import StatisticWidget from "./statistic/StatisticWidget";
import IncomeWidget from "./income/IncomeWidget";

const Dashboard = () => {
	return (
		<div className="flex-1 max-w-6xl w-full mx-auto py-8 px-4 space-y-6 sm:px-7 sm:space-y-10">
			<DashboardHead />
			<StatisticWidget />
			<IncomeWidget />
		</div>
	);
};

export default Dashboard;
