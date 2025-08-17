"use client";

import AuthFormCover from "@/components/ui/auth/AuthFormCover";
import SwitchFormLink from "@/components/ui/auth/SwitchFormLink";
import BaseButton from "@/components/ui/buttons/BaseButton";
import Input from "@/components/ui/Input";
import { ROUTES } from "@/config/routes.config";
import Turnstile from "react-turnstile";

const SignUp = () => {
	return (
		<AuthFormCover title="Регистрация" className="sm:my-auto">
			<form className="mb-4">
				<div className="space-y-4 mb-7">
					<Input id="email" label="Email:" placeholder="example@example.com" />
					<Input
						type="password"
						enableShowPassword
						id="password"
						label="Пароль:"
						placeholder="••••••••"
					/>
					<Input
						type="password"
						id="confirm-password"
						label="Подтвердите пароль:"
						placeholder="••••••••"
					/>
					<Turnstile
						className="overflow-hidden"
						sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY as string}
						// onSuccess={(token) => setCaptchaToken(token)}
						// onError={clearCaptchaToken}
						theme="light"
					/>
				</div>

				<BaseButton className="w-full" type="submit">
					Зарегистрироваться
				</BaseButton>
			</form>

			<SwitchFormLink prefix="Вы зарегистрированы?" href={ROUTES.SIGN_IN}>
				Войти
			</SwitchFormLink>
		</AuthFormCover>
	);
};

export default SignUp;
