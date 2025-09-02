import { profileQueryKey } from "@/constants/query-keys.constants";
import userService from "@/services/user.service";
import { TypeUserFormState } from "@/types/user.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useUpdateProfile = () => {
	const queryClient = useQueryClient();

	const { mutateAsync: updateProfileAsync, isPending } = useMutation({
		mutationKey: [profileQueryKey, "update"],
		mutationFn: (data: TypeUserFormState) => userService.update(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [profileQueryKey] });
			toast.success("Вы успешно обновили профиль!");
		},
		onError: (e: any) => {
			toast.error(e.response.data.message[0]);
		},
	});

	return { updateProfileAsync, isPending };
};

export default useUpdateProfile;
