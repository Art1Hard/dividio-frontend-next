import { z } from "zod";

export const userSchema = z.object({
	email: z.email({ message: "Введите валидный email" }),
	name: z
		.string()
		.max(40, { message: "Вы превысили лимит символов" })
		.optional()
		.or(z.literal("")),
	password: z
		.string()
		.min(6, "Введите более 5 символов")
		.optional()
		.or(z.literal(""))
		.refine((val) => val === undefined || !/\s/.test(val), {
			message: "Пароль не должен содержать пробелов",
		}),
});

export type UserSchema = z.infer<typeof userSchema>;
