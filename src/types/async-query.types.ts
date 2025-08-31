export interface IAsyncQuery<T> {
	isLoading: boolean;
	isError: boolean;
	data: T[] | undefined;
}
