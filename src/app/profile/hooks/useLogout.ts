import { ROUTES } from "@/config/routes.config";
import { profileQueryKey } from "@/constants/query-keys.constants";
import authService from "@/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useLogout = () => {
	const queryClient = useQueryClient();
	const { push } = useRouter();

	const { mutate: logout, isPending } = useMutation({
		mutationKey: ["auth", "logout"],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			push(ROUTES.SIGN_IN);
			queryClient.setQueryData([profileQueryKey], null);
			toast.success("Вы успешно вышли");
		},
	});

	return { logout, isPending };
};

export default useLogout;
