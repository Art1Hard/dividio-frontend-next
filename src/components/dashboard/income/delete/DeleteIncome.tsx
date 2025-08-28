import MutedButton from "@/components/ui/buttons/MutedButton";
import { FiTrash2 } from "react-icons/fi";
import useDeleteIncome from "../hooks/useDeleteIncome";
import DeleteButton from "@/components/ui/buttons/DeleteButton";

const DeleteIncome = ({ id }: { id: string }) => {
	const { deleteHandler } = useDeleteIncome();

	return <DeleteButton onClick={() => deleteHandler(id)} />;
};

export default DeleteIncome;
