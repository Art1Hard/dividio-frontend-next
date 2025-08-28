import BaseButton from "@/components/ui/buttons/BaseButton";
import BaseModal from "@/components/ui/overlays/BaseModal";
import useModal from "@/hooks/useModal";
import { BiPlus } from "react-icons/bi";
import CreateAllocationForm from "./CreateAllocationForm";

const CreateAllocation = () => {
	const { isOpen, open, close } = useModal();

	return (
		<>
			<BaseButton
				onClick={open}
				className="w-full flex gap-x-2 justify-center items-center">
				<BiPlus size={20} />
				Добавить<span className="hidden sm:inline"> категорию</span>
			</BaseButton>

			<BaseModal isOpen={isOpen} onClose={close} title="Добавить категорию">
				<CreateAllocationForm onClose={close} />
			</BaseModal>
		</>
	);
};

export default CreateAllocation;
