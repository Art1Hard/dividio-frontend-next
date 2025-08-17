export interface IUser {
	id: string;
	email: string;
	name?: string;
	password: string;
}

export type TypeUserFormState = Partial<Omit<IUser, "id">>;
