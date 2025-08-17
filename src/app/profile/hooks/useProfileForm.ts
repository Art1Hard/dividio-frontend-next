import { TypeUserFormState } from "@/types/user.types";
import { useForm } from "react-hook-form";
import useInitialData from "./useInitialData";
import useWarnUnsavedChanges from "@/hooks/useWarnUnsavedChanges";
import useUpdateProfile from "./useUpdateProfile";

const useProfileForm = () => {
	const { updateProfileAsync, isPending } = useUpdateProfile();

	const {
		register,
		handleSubmit,
		reset,
		formState: { isDirty },
	} = useForm<TypeUserFormState>();
	useInitialData(reset);
	useWarnUnsavedChanges(isDirty);

	const submit = handleSubmit(async (data) => {
		const payload = { ...data };
		if (!payload.password) delete payload.password;
		await updateProfileAsync(payload);
		reset({ email: payload.email, name: payload.name, password: "" });
	});

	return { register, submit, states: { isDirty, isPending } };
};

export default useProfileForm;
