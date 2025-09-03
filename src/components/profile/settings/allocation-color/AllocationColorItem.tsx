import { IAllocationColor } from "@/types/allocation.types";
import { MouseEvent, TouchEvent } from "react";
import { Menu, Item, useContextMenu } from "react-contexify";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import DeleteAllocationColor from "./delete/DeleteAllocationColor";
import useModal from "@/hooks/useModal";
import useMenu from "./hooks/useMenu";

interface AllocationColorItemProps {
	color: IAllocationColor;
}

const AllocationColorItem = ({ color }: AllocationColorItemProps) => {
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
				<Item onClick={() => alert(`Редактировать ${color.name}`)}>
					<FiEdit2 size={16} />
					<span className="ml-2">Редактировать</span>
				</Item>
				<Item onClick={openDialog}>
					<FiTrash2 size={16} />
					<span className="ml-2">Удалить</span>
				</Item>
			</Menu>

			<DeleteAllocationColor
				id={color.id}
				open={isOpenDialog}
				onClose={closeDialog}
			/>
		</>
	);
};

export default AllocationColorItem;
