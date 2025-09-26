import useAuth from "./useAuth";
import { signUpSchema, type SignUpSchema } from "../models/sign-up.schema";
import { useState } from "react";
import { toast } from "sonner";
import { isServerError } from "@/utils/server-error.utils";
import useAppForm from "@/hooks/useAppForm";

const useSignUp = () => {
	const {
		authAsync,
		statuses: { isPending },
	} = useAuth("register", {
		onSuccessMessage: "Вы успешно зарегистрировались",
	});

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isDirty },
	} = useAppForm<SignUpSchema>(signUpSchema);

	const [token, setToken] = useState<string | null>(null);

	const setCaptchaToken = (token: string) => setToken(token);
	const clearCaptchaToken = () => setToken(null);

	const submit = handleSubmit(async (data) => {
		if (!token) {
			toast.warning("Пожалуйста, подтвердите что вы человек");
			return;
		}

		const { confirmPassword, ...payload } = data;

		try {
			await authAsync({ user: payload, captchaToken: token });
		} catch (e) {
			if (isServerError(e)) {
				switch (e.response!.data.message) {
					case "User with this email is already exist":
						setError("email", {
							type: "server",
							message: "Email занят. Попробуйте другой",
						});
						break;
				}
			}
		}
	});

	return {
		register,
		submit,
		states: { isPending, isDirty, errors },
		token: { setCaptchaToken, clearCaptchaToken },
	};
};

export default useSignUp;
