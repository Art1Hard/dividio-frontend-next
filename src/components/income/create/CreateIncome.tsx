import { BiPlus, BiPlusCircle } from "react-icons/bi";
import BaseButton from "@/components/ui/buttons/BaseButton";
import BaseModal from "@/components/ui/overlays/BaseModal";
import useModal from "@/hooks/useModal";
import CreateIncomeForm from "./CreateIncomeForm";
import useBreakpoint from "@/hooks/useBreakpoint";

const CreateIncome = () => {
	const breakpoint = useBreakpoint();
	const { isOpen, open, close } = useModal();

	if (!breakpoint) return null;

	return (
		<>
			<BaseButton
				fullRounded={breakpoint !== "sm"}
				className="flex items-center gap-2"
				onClick={open}>
				{breakpoint === "sm" ? (
					<>
						<BiPlusCircle size={21} />
						Добавить доход
					</>
				) : (
					<BiPlus size={22} />
				)}
			</BaseButton>

			<BaseModal isOpen={isOpen} onClose={close} title="Добавить новый доход">
				<CreateIncomeForm onClose={close} />
			</BaseModal>
		</>
	);
};

export default CreateIncome;
