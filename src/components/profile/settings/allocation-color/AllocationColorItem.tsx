import { IAllocationColor } from "@/types/allocation.types";
import { MouseEvent } from "react";
import { Menu, Item, useContextMenu } from "react-contexify";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import DeleteAllocationColor from "./delete/DeleteAllocationColor";
import useModal from "@/hooks/useModal";

interface AllocationColorItemProps {
	color: IAllocationColor;
}

const AllocationColorItem = ({ color }: AllocationColorItemProps) => {
	const {
		isOpen: isOpenDialog,
		open: openDialog,
		close: closeDialog,
	} = useModal();
	const { show } = useContextMenu({ id: `color_menu-${color.id}` });
	const contextMenuHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		show({ event: e });
	};

	return (
		<>
			<button
				onContextMenu={contextMenuHandler}
				className="w-9 h-9 rounded-full shrink-0"
				style={{ backgroundColor: color.value }}
			/>
			<Menu animation={false} id={`color_menu-${color.id}`}>
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
