import MutedButton from "@/components/ui/buttons/MutedButton";
import BaseModal from "@/components/ui/overlays/BaseModal";
import useModal from "@/hooks/useModal";
import { FiEdit2 } from "react-icons/fi";
import EditIncomeForm from "./EditIncomeForm";
import { IIncome } from "@/types/income.types";

const EditIncome = ({ income }: { income: IIncome }) => {
	const { isOpen, open, close } = useModal();

	return (
		<>
			<MutedButton onClick={open} className="flex-1 flex justify-center">
				<FiEdit2 size={16} />
			</MutedButton>

			<BaseModal
				isOpen={isOpen}
				onClose={close}
				title={`Редактировать доход «${income.title}»`}>
				<EditIncomeForm onClose={close} income={income} />
			</BaseModal>
		</>
	);
};

export default EditIncome;
