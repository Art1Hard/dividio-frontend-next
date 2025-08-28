"use client";

import { AiFillGold } from "react-icons/ai";
import useFetchIncomes from "./hooks/useFetchIncomes";
import IncomeItem from "./IncomeItem";
import CreateIncome from "@/components/dashboard/income/create/CreateIncome";
import DashboardWidgetWrapper from "@/components/ui/wrappers/DashboardWidgetWrapper";

const IncomeWidget = () => {
	const { incomeData } = useFetchIncomes();

	return (
		<DashboardWidgetWrapper
			title="Все доходы"
			icon={<AiFillGold size={24} className="text-amber-500" />}
			headerButton={<CreateIncome />}>
			<div className="space-y-5">
				{incomeData &&
					incomeData.incomes.map((income) => (
						<IncomeItem key={income.id} income={income} />
					))}
			</div>
		</DashboardWidgetWrapper>
	);
};

export default IncomeWidget;
