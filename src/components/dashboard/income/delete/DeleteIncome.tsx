import useDeleteIncome from "../hooks/useDeleteIncome";
import DeleteButton from "@/components/ui/buttons/DeleteButton";
import ConfirmDialog from "@/components/ui/overlays/ConfirmDialog";
import useModal from "@/hooks/useModal";

const DeleteIncome = ({ id }: { id: string }) => {
	const { isOpen, open, close } = useModal();
	const { deleteHandler } = useDeleteIncome();

	return (
		<>
			<DeleteButton onClick={open} />
			<ConfirmDialog
				isOpen={isOpen}
				onClose={close}
				onConfirm={() => deleteHandler(id)}
				title="Удаление дохода"
			/>
		</>
	);
};

export default DeleteIncome;
