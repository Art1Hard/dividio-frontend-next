"use client";

import AuthFormCover from "@/components/ui/auth/AuthFormCover";
import SwitchFormLink from "@/components/ui/auth/SwitchFormLink";
import BaseButton from "@/components/ui/buttons/BaseButton";
import Input from "@/components/ui/Input";
import useAuth from "../hooks/useAuth";

const SignIn = () => {
	const { register, submit, isPending } = useAuth("login");

	return (
		<AuthFormCover title="Авторизация" className="sm:my-auto">
			<form onSubmit={submit} className="mb-4">
				<div className="space-y-4 mb-7">
					<Input
						id="email"
						label="Email:"
						placeholder="example@example.com"
						{...register("email")}
					/>
					<Input
						type="password"
						enableShowPassword
						id="password"
						label="Пароль:"
						placeholder="••••••••"
						{...register("password")}
					/>
				</div>

				<BaseButton className="w-full" type="submit">
					Войти
				</BaseButton>
			</form>

			<SwitchFormLink prefix="Нет аккаунта?" href="/sign-up">
				Зарегистрироваться
			</SwitchFormLink>
		</AuthFormCover>
	);
};

export default SignIn;
