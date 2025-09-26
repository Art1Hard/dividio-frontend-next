import { IAllocationColor } from "@/types/allocation.types";
import { Menu, Item } from "react-contexify";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import DeleteAllocationColor from "./delete/DeleteAllocationColor";
import useModal from "@/hooks/useModal";
import useMenu from "./hooks/useMenu";
import EditAllocationColorForm from "./edit/EditAllocationColorForm";
import BaseModal from "@/components/ui/overlays/BaseModal";

interface AllocationColorItemProps {
	color: IAllocationColor;
}

const AllocationColorItem = ({ color }: AllocationColorItemProps) => {
	const {
		isOpen: isOpenModal,
		open: openModal,
		close: closeModal,
	} = useModal();
	const {
		isOpen: isOpenDialog,
		open: openDialog,
		close: closeDialog,
	} = useModal();
	const { menuId, contextMenuHandler } = useMenu(color.id);

	return (
		<>
			<button
				onContextMenu={contextMenuHandler}
				className="w-9 h-9 rounded-full shrink-0 cursor-pointer"
				style={{ backgroundColor: color.value }}
			/>
			<Menu animation={false} id={menuId}>
				<Item onClick={openModal}>
					<FiEdit2 size={16} />
					<span className="ml-2">Редактировать</span>
				</Item>
				<Item onClick={openDialog}>
					<FiTrash2 size={16} />
					<span className="ml-2">Удалить</span>
				</Item>
			</Menu>

			<BaseModal
				isOpen={isOpenModal}
				onClose={closeModal}
				title="Редактировать цвет">
				<EditAllocationColorForm colorItem={color} onClose={closeModal} />
			</BaseModal>

			<DeleteAllocationColor
				id={color.id}
				open={isOpenDialog}
				onClose={closeDialog}
			/>
		</>
	);
};

export default AllocationColorItem;
