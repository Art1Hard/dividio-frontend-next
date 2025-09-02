import useProfile from "@/hooks/useProfile";
import { UserSchema } from "@/components/profile/models/user.schema";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

const useInitialData = (reset: UseFormReset<UserSchema>) => {
	const {
		profile,
		states: { isSuccess },
	} = useProfile();

	useEffect(() => {
		if (!profile || !isSuccess) return;

		reset({
			email: profile.email ?? "",
			name: profile.name ?? "",
		});
	}, [isSuccess]);

	return {};
};

export default useInitialData;
