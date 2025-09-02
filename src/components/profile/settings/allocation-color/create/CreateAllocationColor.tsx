import BaseModal from "@/components/ui/overlays/BaseModal";
import { LuPlus } from "react-icons/lu";
import CreateAllocationColorForm from "./CreateAllocationColorForm";
import useModal from "@/hooks/useModal";

const CreateAllocationColor = () => {
	const { isOpen, open, close } = useModal();

	return (
		<>
			<button
				onClick={open}
				className="w-9 h-9 rounded-full bg-primary-400/30 hover:bg-primary-400/60 dark:bg-primary-400 transition-colors flex justify-center items-center shrink-0 cursor-pointer">
				<LuPlus size={18} />
			</button>
			<BaseModal isOpen={isOpen} onClose={close} title="Добавить цвет">
				<CreateAllocationColorForm onClose={close} />
			</BaseModal>
		</>
	);
};

export default CreateAllocationColor;
