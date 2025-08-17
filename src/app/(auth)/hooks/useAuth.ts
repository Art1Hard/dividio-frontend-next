import { ROUTES } from "@/config/routes.config";
import authService, { type AuthType } from "@/services/auth.service";
import { IAuthFormType } from "@/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const useAuth = (type: AuthType) => {
	const queryClient = useQueryClient();
	const { replace } = useRouter();
	const { register, handleSubmit } = useForm<IAuthFormType>();

	const { mutate, isPending } = useMutation({
		mutationKey: ["auth"],
		mutationFn: (data: IAuthFormType) => authService.main(type, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			replace(ROUTES.DASHBOARD);
		},
	});

	const submit = handleSubmit((data: IAuthFormType) => {
		mutate(data);
	});

	return { register, submit, isPending };
};

export default useAuth;
