import { ROUTES } from "@/config/routes.config";
import { profileQueryKey } from "@/constants/query-keys.constants";
import authService, { type AuthType } from "@/services/auth.service";
import { ISignIn, ISignUp } from "@/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useAuth = (type: AuthType) => {
	const queryClient = useQueryClient();
	const { replace } = useRouter();

	const {
		mutate: auth,
		mutateAsync: authAsync,
		isPending,
	} = useMutation({
		mutationKey: ["auth"],
		mutationFn: (data: ISignIn | ISignUp) => authService.main(type, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [profileQueryKey] });
			replace(ROUTES.DASHBOARD);
		},
	});

	return { auth, authAsync, statuses: { isPending } };
};

export default useAuth;
