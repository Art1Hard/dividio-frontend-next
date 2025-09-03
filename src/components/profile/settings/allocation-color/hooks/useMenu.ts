import { MouseEvent, TouchEvent } from "react";
import { useContextMenu } from "react-contexify";

const useMenu = (colorId: string) => {
	const menuId = `color_menu-${colorId}`;

	const { show } = useContextMenu({ id: menuId });
	const contextMenuHandler = (
		e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		show({ event: e });
	};

	return { menuId, contextMenuHandler };
};

export default useMenu;
