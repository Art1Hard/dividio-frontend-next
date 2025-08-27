import { z } from "zod";

export const incomeSchema = z.object({
	title: z.string().nonempty("Поле не может быть пустым"),
	amount: z
		.number("Введите целое число")
		.min(1000, "Число не может быть меньше 1000"),
});

export type IncomeSchema = z.infer<typeof incomeSchema>;
