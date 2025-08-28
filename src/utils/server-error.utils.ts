import { AxiosError } from "axios";

type ServerErrorData = {
	error: string;
	message: string;
	statusCode?: number;
	code?: string;
	details?: {
		used: number;
		limit: number;
		available: number;
	};
};

export function isServerError(e: unknown): e is AxiosError<ServerErrorData> {
	return (
		typeof e === "object" &&
		e !== null &&
		"isAxiosError" in e &&
		e instanceof AxiosError && // дополнительная проверка
		typeof e.response?.data?.message === "string"
	);
}
