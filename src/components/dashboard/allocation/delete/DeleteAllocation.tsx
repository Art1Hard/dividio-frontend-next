import DeleteButton from "@/components/ui/buttons/DeleteButton";
import useDeleteAllocation from "../hooks/useDeleteAllocation";
import ConfirmDialog from "@/components/ui/overlays/ConfirmDialog";
import useModal from "@/hooks/useModal";

const DeleteAllocation = ({ allocationId }: { allocationId: string }) => {
	const { isOpen, open, close } = useModal();
	const { deleteHandler } = useDeleteAllocation();

	return (
		<>
			<DeleteButton onClick={open} />
			<ConfirmDialog
				isOpen={isOpen}
				onClose={close}
				onConfirm={() => deleteHandler(allocationId)}
				title="Удаление распределения"
			/>
		</>
	);
};

export default DeleteAllocation;
