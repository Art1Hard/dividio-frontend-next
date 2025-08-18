"use client";

import AuthFormCover from "@/components/ui/auth/AuthFormCover";
import SwitchFormLink from "@/components/ui/auth/SwitchFormLink";
import BaseButton from "@/components/ui/buttons/BaseButton";
import Input from "@/components/ui/Input";
import { ROUTES } from "@/config/routes.config";
import Turnstile from "react-turnstile";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
	const {
		register,
		submit,
		token,
		states: { isPending, isDirty, errors },
	} = useSignUp();

	return (
		<AuthFormCover title="Регистрация" className="sm:my-auto">
			<form onSubmit={submit} className="mb-4">
				<div className="space-y-4 mb-6">
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
						placeholder="••••••••"
					/>
					<Input
						register={register}
						errors={errors}
						name="confirmPassword"
						id="confirm-password"
						label="Подтвердите пароль:"
						type="password"
						placeholder="••••••••"
					/>
					<Turnstile
						className="overflow-hidden w-full flex sm:justify-center"
						sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY as string}
						onSuccess={(tokenValue) => token.setCaptchaToken(tokenValue)}
						onError={token.clearCaptchaToken}
						theme="light"
					/>
				</div>

				<BaseButton
					disabled={isPending || !isDirty}
					className="w-full"
					type="submit">
					{isPending ? "Регистрация..." : "Зарегистрироваться"}
				</BaseButton>
			</form>

			<SwitchFormLink prefix="Вы зарегистрированы?" href={ROUTES.SIGN_IN}>
				Войти
			</SwitchFormLink>
		</AuthFormCover>
	);
};

export default SignUp;
