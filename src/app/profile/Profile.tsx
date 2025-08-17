"use client";

import BaseButton from "@/components/ui/buttons/BaseButton";
import useLogout from "./hooks/useLogout";
import Input from "@/components/ui/Input";
import useProfileForm from "./hooks/useProfileForm";

const Profile = () => {
	const {
		register,
		submit,
		states: { isDirty, isPending },
	} = useProfileForm();
	const { logout, isPending: isLogoutPending } = useLogout();

	return (
		<div className="flex-1 bg-primary-200 flex justify-center sm:bg-transparent py-8">
			<form
				onSubmit={submit}
				className="bg-primary-200 p-6 w-full h-full max-w-md @container sm:my-auto sm:h-auto sm:shadow-md sm:rounded-xl">
				<h2 className="text-center font-bold mb-4 text-2xl">Профиль</h2>
				<div className="space-y-4 mb-4">
					<Input
						id="email"
						label="Email:"
						placeholder="example@example.ex"
						{...register("email")}
					/>
					<Input
						id="name"
						label="Имя:"
						placeholder="Иван"
						{...register("name")}
					/>

					<Input
						id="password"
						type="password"
						enableShowPassword
						label="Изменить пароль:"
						placeholder="••••••••"
						{...register("password")}
					/>
				</div>

				<hr className="border-secondary-500 mb-4" />

				<BaseButton
					type="submit"
					disabled={isPending || !isDirty}
					className="w-full font-semibold mb-2">
					Сохранить
				</BaseButton>

				<BaseButton
					disabled={isLogoutPending}
					color="danger"
					className="w-full font-semibold"
					onClick={() => logout()}>
					{isLogoutPending ? "Выходим..." : "Выйти"}
				</BaseButton>
			</form>
		</div>
	);
};

export default Profile;
