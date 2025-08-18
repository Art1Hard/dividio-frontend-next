import { useForm } from "react-hook-form";
import useInitialData from "./useInitialData";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import useUpdateProfile from "./useUpdateProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, userSchema } from "@/app/profile/models/user.schema";
import { isServerError } from "@/utils/server-error.utils";

const useProfileForm = () => {
	const { updateProfileAsync, isPending } = useUpdateProfile();

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { isDirty, errors },
	} = useForm<UserSchema>({
		resolver: zodResolver(userSchema),
		mode: "onTouched",
	});
	useInitialData(reset);
	useWarnUnsavedChanges(isDirty);

	const submit = handleSubmit(async (data) => {
		const payload = data;
		if (payload.password === "") delete payload.password;

		try {
			await updateProfileAsync(payload);
			reset({ email: payload.email, name: payload.name, password: "" });
		} catch (e) {
			if (isServerError(e)) {
				switch (e.response.data.message) {
					case "This email is already taken":
						setError("email", {
							type: "server",
							message: "Данный email уже занят",
						});
						break;
				}
			}
		}
	});

	return { register, submit, states: { isDirty, isPending, errors } };
};

export default useProfileForm;
