"use client";

import { AiFillGold } from "react-icons/ai";
import useFetchIncomes from "./hooks/useFetchIncomes";
import IncomeItem from "./IncomeItem";
import CreateIncome from "@/components/income/create/CreateIncome";

const IncomeWidget = () => {
	const { incomeData } = useFetchIncomes();

	return (
		<div className="max-w-sm mx-auto bg-primary-200 rounded-2xl p-6 shadow-md sm:max-w-full">
			<div className="flex items-center justify-between mb-5 gap-2">
				<div className="flex items-center gap-1">
					<AiFillGold size={24} className="text-amber-500" />
					<h2 className="text-lg font-semibold">Список доходов</h2>
				</div>
				<CreateIncome />
			</div>

			<div className="space-y-5">
				{incomeData &&
					incomeData.incomes.map((income) => (
						<IncomeItem key={income.id} income={income} />
					))}
			</div>
		</div>
	);
};

export default IncomeWidget;
