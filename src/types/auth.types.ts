import { IUser } from "./user.types";

export interface IAuthFormType {
	email: string;
	password: string;
}

export interface IAuthResponse {
	accessToken: string;
	user: IUser;
}
