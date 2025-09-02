import { z } from "zod";

export const allocationColorSchema = z.object({
	name: z
		.string()
		.nonempty("Поле не может быть пустым")
		.max(40, { message: "Вы превысили лимит символов" }),
	value: z.string(),
});

export type AllocationColorSchema = z.infer<typeof allocationColorSchema>;
