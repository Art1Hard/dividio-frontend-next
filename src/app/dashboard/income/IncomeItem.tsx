import DeleteIncome from "@/components/income/delete/DeleteIncome";
import EditIncome from "@/components/income/edit/EditIncome";
import MutedButton from "@/components/ui/buttons/MutedButton";
import { IIncome } from "@/types/income.types";
import { FiEdit2 } from "react-icons/fi";

const IncomeItem = ({ income }: { income: IIncome }) => {
	return (
		<div className="flex flex-col justify-between bg-slate-300/50 px-4 py-3 rounded-lg shadow-sm sm:flex-row">
			<div className="mb-2">
				<p className="font-medium mb-1 sm:mb-2">{income.title}</p>
				<p className="text-xl font-bold">
					{income.amount.toLocaleString("ru")} ₽
				</p>
			</div>
			<div className="flex gap-3 items-center">
				<EditIncome income={income} />
				<DeleteIncome id={income.id} />
			</div>
		</div>
	);
};

export default IncomeItem;
