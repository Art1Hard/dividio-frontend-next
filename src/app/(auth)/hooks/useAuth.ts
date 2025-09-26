import { ROUTES } from "@/config/routes.config";
import { profileQueryKey } from "@/constants/query-keys.constants";
import authService, { type AuthType } from "@/services/auth.service";
import { ISignIn, ISignUp } from "@/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useAuth = (type: AuthType, config: { onSuccessMessage: string }) => {
	const queryClient = useQueryClient();
	const { push } = useRouter();

	const {
		mutate: auth,
		mutateAsync: authAsync,
		isPending,
	} = useMutation({
		mutationKey: ["auth"],
		mutationFn: (data: ISignIn | ISignUp) => authService.main(type, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [profileQueryKey] });
			push(ROUTES.DASHBOARD);
			toast.success(config.onSuccessMessage);
		},
	});

	return { auth, authAsync, statuses: { isPending } };
};

export default useAuth;
