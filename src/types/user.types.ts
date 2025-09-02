import { IAllocationColor } from "./allocation.types";

export interface IUser {
	id: string;
	email: string;
	name?: string;
	colors: IAllocationColor[];
}

export type TypeUserFormState = Partial<Omit<IUser, "id">>;
