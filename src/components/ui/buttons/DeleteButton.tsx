import { FiTrash2 } from "react-icons/fi";
import MutedButton, { MutedButtonProps } from "./MutedButton";

const DeleteButton = (
	props: Omit<MutedButtonProps, "className" | "color" | "children">
) => {
	return (
		<MutedButton
			color="danger"
			className="flex-1 flex justify-center"
			{...props}>
			<FiTrash2 size={16} />
		</MutedButton>
	);
};

export default DeleteButton;
