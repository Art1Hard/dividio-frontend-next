import DeleteButton from "@/components/ui/buttons/DeleteButton";
import useDeleteAllocation from "../hooks/useDeleteAllocation";

const DeleteAllocation = ({ allocationId }: { allocationId: string }) => {
	const { deleteHandler } = useDeleteAllocation();

	return (
		<>
			<DeleteButton onClick={() => deleteHandler(allocationId)} />
		</>
	);
};

export default DeleteAllocation;
