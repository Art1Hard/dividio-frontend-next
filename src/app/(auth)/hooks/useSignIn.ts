import { SignInSchema, signInSchema } from "../models/sign-in.schema";
import useAuth from "./useAuth";
import { isServerError } from "@/utils/server-error.utils";
import useAppForm from "@/hooks/useAppForm";

const useSignIn = () => {
	const {
		authAsync,
		statuses: { isPending },
	} = useAuth("login", { onSuccessMessage: "Вы успешно вошли в аккаунт" });

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isDirty },
	} = useAppForm<SignInSchema>(signInSchema);

	const submit = handleSubmit(async (data) => {
		try {
			await authAsync(data);
		} catch (e) {
			if (isServerError(e)) {
				switch (e.response!.data.message) {
					case "Invalid password":
						setError("password", {
							type: "server",
							message: "Неверный пароль",
						});
						break;

					case "User not found":
						setError("email", {
							type: "server",
							message: "Такого пользователя не существует",
						});
						break;
				}
			}
		}
	});

	return { register, submit, states: { isPending, isDirty, errors } };
};

export default useSignIn;
