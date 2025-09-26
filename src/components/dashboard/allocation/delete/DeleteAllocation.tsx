import DeleteButton from "@/components/ui/buttons/DeleteButton";
import useDeleteAllocation from "../hooks/useDeleteAllocation";
import ConfirmDialog from "@/components/ui/overlays/ConfirmDialog";
import useModal from "@/hooks/useModal";

interface DeleteAllocationProps {
	id: string;
	title: string;
}

const DeleteAllocation = ({ id, title }: DeleteAllocationProps) => {
	const { isOpen, open, close } = useModal();
	const { deleteHandler } = useDeleteAllocation();

	return (
		<>
			<DeleteButton onClick={open} />
			<ConfirmDialog
				isOpen={isOpen}
				onClose={close}
				onConfirm={() => deleteHandler(id)}
				title={`Удалить распределение «${title}»?`}
			/>
		</>
	);
};

export default DeleteAllocation;
