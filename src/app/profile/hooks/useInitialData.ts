import useProfile from "@/hooks/useProfile";
import { TypeUserFormState } from "@/types/user.types";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

const useInitialData = (reset: UseFormReset<TypeUserFormState>) => {
	const {
		profile,
		states: { isSuccess, isLoading },
	} = useProfile();

	useEffect(() => {
		if (!profile || !isSuccess) return;

		reset({
			email: profile.email ?? "",
			name: profile.name ?? "",
			password: "",
		});
	}, [isSuccess]);

	return {};
};

export default useInitialData;
