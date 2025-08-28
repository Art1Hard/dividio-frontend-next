import BaseModal from "@/components/ui/overlays/BaseModal";
import useModal from "@/hooks/useModal";
import EditIncomeForm from "./EditIncomeForm";
import { IIncome } from "@/types/income.types";
import EditButton from "@/components/ui/buttons/EditButton";

const EditIncome = ({ income }: { income: IIncome }) => {
	const { isOpen, open, close } = useModal();

	return (
		<>
			<EditButton onClick={open} />

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
