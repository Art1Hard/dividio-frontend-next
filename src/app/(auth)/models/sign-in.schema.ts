import { z } from "zod";

export const signInSchema = z.object({
	email: z.email({ message: "Введите валидный email" }),
	password: z
		.string()
		.min(6, "Введите более 5 символов")
		.refine((val) => !/\s/.test(val), {
			message: "Пароль не должен содержать пробелов",
		}),
});

export type SignInSchema = z.infer<typeof signInSchema>;
