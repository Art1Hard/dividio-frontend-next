export interface IUser {
	id: String;
	email: String;
	name?: String;
	password: String;
}

export type TypeUserFormState = Partial<Omit<IUser, "id">>;
