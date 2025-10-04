import BaseButton from "@/components/ui/buttons/BaseButton";
import useLogout from "./hooks/useLogout";
import ConfirmDialog from "@/components/ui/overlays/ConfirmDialog";
import useModal from "@/hooks/useModal";

const Logout = () => {
	const { isOpen, close, open } = useModal();
	const { logout, isPending: isLogoutPending } = useLogout();

	return (
		<>
			<BaseButton
				disabled={isLogoutPending}
				color="danger"
				className="w-full font-semibold"
				onClick={open}>
				{isLogoutPending ? "Выходим..." : "Выйти"}
			</BaseButton>

			<ConfirmDialog
				title="Выход из аккаунта"
				isOpen={isOpen}
				onClose={close}
				onConfirm={() => logout()}
			/>
		</>
	);
};

export default Logout;
