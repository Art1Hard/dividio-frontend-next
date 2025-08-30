"use client";

import { BiPlus, BiPlusCircle } from "react-icons/bi";
import BaseModal from "@/components/ui/overlays/BaseModal";
import useModal from "@/hooks/useModal";
import CreateIncomeForm from "./CreateIncomeForm";
import HeaderButton from "@/components/ui/buttons/HeaderButton";

const CreateIncome = () => {
	const { isOpen, open, close } = useModal();

	return (
		<>
			<HeaderButton
				onClick={open}
				smChildren={
					<>
						<BiPlusCircle size={21} />
						Добавить доход
					</>
				}
				children={<BiPlus size={22} />}
			/>

			<BaseModal isOpen={isOpen} onClose={close} title="Добавить новый доход">
				<CreateIncomeForm onClose={close} />
			</BaseModal>
		</>
	);
};

export default CreateIncome;
