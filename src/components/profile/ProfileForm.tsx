import BaseButton from "../ui/buttons/BaseButton";
import Input from "../ui/form/Input";
import useProfileForm from "./hooks/useProfileForm";

const ProfileForm = () => {
	const { register, submit, states } = useProfileForm();

	return (
		<form onSubmit={submit}>
			<div className="space-y-4 mb-4">
				<Input
					register={register}
					name="email"
					errors={states.errors}
					id="email"
					label="Email:"
					placeholder="example@example.ex"
				/>

				<Input
					register={register}
					name="name"
					errors={states.errors}
					id="name"
					label="Имя:"
					placeholder="Иван"
				/>

				<Input
					register={register}
					name="password"
					errors={states.errors}
					type="password"
					id="password"
					label="Изменить пароль:"
					enableShowPassword
					placeholder="••••••••"
				/>
			</div>

			<BaseButton
				type="submit"
				disabled={states.isPending || !states.isDirty}
				className="w-full font-semibold">
				Сохранить
			</BaseButton>
		</form>
	);
};

export default ProfileForm;
