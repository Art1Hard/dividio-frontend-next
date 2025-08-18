import z from "zod";
import { signInSchema } from "./sign-in.schema";

export const signUpSchema = signInSchema
	.extend({
		confirmPassword: z
			.string()
			.nonempty({ message: "Поле не может быть пустым" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Пароли не совпадают",
		path: ["confirmPassword"],
	});

export type SignUpSchema = z.infer<typeof signUpSchema>;
