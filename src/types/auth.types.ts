import { IUser } from "./user.types";

export interface ISignIn {
	email: string;
	password: string;
}

export interface ISignUp {
	user: ISignIn;
	captchaToken: string;
}

export interface IAuthResponse {
	accessToken: string;
	user: IUser;
}
