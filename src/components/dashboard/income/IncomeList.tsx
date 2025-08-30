"use client";

import useFetchIncomes from "@/app/dashboard/income/hooks/useFetchIncomes";
import IncomeItem from "./IncomeItem";
import { AnimatePresence, motion } from "framer-motion";
import { dashboardWidgetItemAnimation } from "@/constants/animation.constants";

const IncomeList = () => {
	const { incomeData } = useFetchIncomes();

	return (
		<div className="space-y-5">
			<AnimatePresence>
				{incomeData &&
					incomeData.incomes.map((income) => (
						<IncomeItem key={income.id} income={income} />
					))}
			</AnimatePresence>
		</div>
	);
};

export default IncomeList;
