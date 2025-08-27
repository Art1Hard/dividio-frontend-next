"use client";

import { useState, type InputHTMLAttributes } from "react";
import { ClosedEyeIcon, OpenedEyeIcon } from "../auth/icons";
import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from "react-hook-form";
import clsx from "clsx";

interface InputProps<FormData extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	name: Path<FormData>;
	register: UseFormRegister<FormData>;
	errors?: FieldErrors<FormData>;
	label?: string;
	enableShowPassword?: boolean;
	rootClassName?: string;
}

const Input = <FormData extends FieldValues>({
	name,
	register,
	errors,
	label,
	enableShowPassword,
	rootClassName,
	type = "text",
	className,
	...props
}: InputProps<FormData>) => {
	const error = errors?.[name]?.message as string | undefined;
	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<div className={rootClassName}>
			{label && (
				<label
					htmlFor={props.id}
					className="block text-sm font-medium text-secondary-800 mb-1">
					{label}
				</label>
			)}

			<div className="relative">
				<input
					type={
						type === "password"
							? isShowPassword
								? "text"
								: "password"
							: "text"
					}
					className={clsx(
						"w-full px-4 py-2 rounded-lg bg-primary-300/50 focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-secondary-500 border placeholder:text-base",
						error ? "border-red-500" : "border-primary-400",
						type === "password" && "pr-10",
						className
					)}
					{...props}
					{...register(name, { valueAsNumber: type === "number" })}
				/>

				{type === "password" && enableShowPassword && (
					<button
						onClick={() => setIsShowPassword((prev) => !prev)}
						type="button"
						className="cursor-pointer absolute right-3 top-[50%] translate-y-[-50%] text-secondary-700 hover:text-black"
						aria-label="Показать или скрыть пароль">
						{!isShowPassword ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
					</button>
				)}
			</div>

			{error && (
				<p className="text-red-500 text-sm mt-1 overflow-hidden overflow-ellipsis text-nowrap">
					{error}
				</p>
			)}
		</div>
	);
};

export default Input;
