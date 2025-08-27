import MutedButton from "@/components/ui/buttons/MutedButton";
import { FiTrash2 } from "react-icons/fi";
import useDeleteIncome from "../hooks/useDeleteIncome";

const DeleteIncome = ({ id }: { id: string }) => {
	const { deleteHandler } = useDeleteIncome();

	return (
		<MutedButton
			onClick={() => deleteHandler(id)}
			color="danger"
			className="flex-1 flex justify-center">
			<FiTrash2 size={16} />
		</MutedButton>
	);
};

export default DeleteIncome;
