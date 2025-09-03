import ConfirmDialog from "@/components/ui/overlays/ConfirmDialog";
import useDeleteAllocationColor from "../hooks/useDeleteAllocationColor";

interface DeleteAllocationColorProps {
	id: string;
	open: boolean;
	onClose: () => void;
}

const DeleteAllocationColor = ({
	id,
	open,
	onClose,
}: DeleteAllocationColorProps) => {
	const { deleteColor } = useDeleteAllocationColor();

	return (
		<ConfirmDialog
			title="Удаление цвета"
			isOpen={open}
			onClose={onClose}
			onConfirm={() => deleteColor(id)}></ConfirmDialog>
	);
};

export default DeleteAllocationColor;
