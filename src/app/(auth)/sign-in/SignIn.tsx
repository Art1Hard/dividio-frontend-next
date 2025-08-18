"use client";

import AuthFormCover from "@/components/ui/auth/AuthFormCover";
import SwitchFormLink from "@/components/ui/auth/SwitchFormLink";
import BaseButton from "@/components/ui/buttons/BaseButton";
import Input from "@/components/ui/Input";
import useSignIn from "../hooks/useSignIn";

const SignIn = () => {
	const {
		register,
		submit,
		states: { errors, isPending, isDirty },
	} = useSignIn();

	return (
		<AuthFormCover title="Авторизация" className="sm:my-auto">
			<form onSubmit={submit} className="mb-4">
				<div className="space-y-4 mb-7">
					<Input
						register={register}
						errors={errors}
						name="email"
						id="email"
						label="Email:"
						placeholder="example@example.com"
					/>
					<Input
						register={register}
						errors={errors}
						name="password"
						id="password"
						label="Пароль:"
						type="password"
						enableShowPassword
						placeholder="••••••••"
					/>
				</div>

				<BaseButton
					disabled={isPending || !isDirty}
					className="w-full"
					type="submit">
					{isPending ? "Входим..." : "Войти"}
				</BaseButton>
			</form>

			<SwitchFormLink prefix="Нет аккаунта?" href="/sign-up">
				Зарегистрироваться
			</SwitchFormLink>
		</AuthFormCover>
	);
};

export default SignIn;
