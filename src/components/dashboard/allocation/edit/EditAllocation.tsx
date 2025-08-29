import EditButton from "@/components/ui/buttons/EditButton";
import BaseModal from "@/components/ui/overlays/BaseModal";
import EditAllocationForm from "./EditAllocationForm";
import { IAllocation } from "@/types/allocation.types";
import useModal from "@/hooks/useModal";

const EditAllocation = ({ item }: { item: IAllocation }) => {
	const { isOpen, open, close } = useModal();

	return (
		<>
			<EditButton onClick={open} />

			<BaseModal
				isOpen={isOpen}
				onClose={close}
				title="Редактировать категорию">
				<EditAllocationForm item={item} onClose={close} />
			</BaseModal>
		</>
	);
};

export default EditAllocation;
