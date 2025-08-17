"use client";

import { useState, type InputHTMLAttributes } from "react";
import { ClosedEyeIcon, OpenedEyeIcon } from "./auth/icons";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	error?: FieldError;
	label?: string;
	enableShowPassword?: boolean;
	rootClassName?: string;
}

const Input = ({
	id,
	error,
	label,
	enableShowPassword,
	rootClassName,
	type = "text",
	className,
	...props
}: InputProps) => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<div className={rootClassName}>
			{label && (
				<label
					htmlFor={id}
					className="block text-sm font-medium text-secondary-800 mb-1">
					{label}
				</label>
			)}

			<div className="relative">
				<input
					type={
						type === "password" ? (isShowPassword ? "text" : "password") : type
					}
					id={id}
					className={clsx(
						"w-full px-4 py-2 rounded-lg bg-primary-300/50 focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-secondary-500 border",
						error ? "border-red-600" : "border-primary-400",
						type === "password" && "pr-10",
						className
					)}
					{...props}
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
		</div>
	);
};

Input.displayName = "Input";

export default Input;
