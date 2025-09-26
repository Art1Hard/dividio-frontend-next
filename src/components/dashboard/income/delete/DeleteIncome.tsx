import useDeleteIncome from "../hooks/useDeleteIncome";
import DeleteButton from "@/components/ui/buttons/DeleteButton";
import ConfirmDialog from "@/components/ui/overlays/ConfirmDialog";
import useModal from "@/hooks/useModal";

interface DeleteIncomeProps {
	id: string;
	title: string;
}

const DeleteIncome = ({ id, title }: DeleteIncomeProps) => {
	const { isOpen, open, close } = useModal();
	const { deleteHandler } = useDeleteIncome();

	return (
		<>
			<DeleteButton onClick={open} />
			<ConfirmDialog
				isOpen={isOpen}
				onClose={close}
				onConfirm={() => deleteHandler(id)}
				title={`Удалить доход «${title}»?`}
			/>
		</>
	);
};

export default DeleteIncome;
