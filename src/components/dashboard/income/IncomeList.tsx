"use client";

import useFetchIncomes from "@/app/dashboard/income/hooks/useFetchIncomes";
import IncomeItem from "./IncomeItem";
import AsyncList from "@/components/AsyncList";
import DashboardWidgetItemSkeleton from "@/components/ui/skeletons/DashboardWidgetItemSkeleton";

const IncomeList = () => {
	const incomeQuery = useFetchIncomes();

	return (
		<AsyncList
			query={incomeQuery}
			loader={<DashboardWidgetItemSkeleton count={2} />}
			renderItem={(income) => <IncomeItem key={income.id} income={income} />}
		/>
	);
};

export default IncomeList;
