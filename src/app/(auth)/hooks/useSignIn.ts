import { useForm } from "react-hook-form";
import { SignInSchema, signInSchema } from "../models/sign-in.schema";
import useAuth from "./useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { isServerError } from "@/utils/server-error.utils";
import { toast } from "sonner";

const useSignIn = () => {
	const {
		authAsync,
		statuses: { isPending },
	} = useAuth("login");

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isDirty },
	} = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
		mode: "onTouched",
	});

	const submit = handleSubmit(async (data) => {
		try {
			await authAsync(data);
			toast.success("Вы успешно вошли в аккаунт");
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
