type ServerError = {
	response: {
		data: {
			error: string;
			message: string;
			statusCode: number;
		};
	};
};

export function isServerError(e: unknown): e is ServerError {
	return (
		typeof e === "object" &&
		e !== null &&
		"response" in e &&
		typeof (e as any).response === "object" &&
		typeof (e as any).response.data === "object" &&
		typeof (e as any).response.data.message === "string" &&
		typeof (e as any).response.data.error === "string" &&
		typeof (e as any).response.data.statusCode === "number"
	);
}
