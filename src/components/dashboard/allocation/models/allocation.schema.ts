import { z } from "zod";

export const allocationSchema = z.object({
	title: z.string().nonempty("Поле не может быть пустым"),
	percentage: z
		.int("Введите целое число")
		.min(5, "Число не может быть меньше 5")
		.max(100, "Число не может быть больше 100"),
	colorId: z.string().nonempty("Поле не может быть пустым"),
});

export type AllocationSchema = z.infer<typeof allocationSchema>;
