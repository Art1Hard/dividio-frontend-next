import { FiEdit2 } from "react-icons/fi";
import MutedButton, { MutedButtonProps } from "./MutedButton";

const EditButton = (
	props: Omit<MutedButtonProps, "className" | "color" | "children">
) => {
	return (
		<MutedButton className="flex-1 flex justify-center" {...props}>
			<FiEdit2 size={16} />
		</MutedButton>
	);
};

export default EditButton;
