import { axiosClassic } from "@/api/interceptors";
import { IAuthFormType, IAuthResponse } from "@/types/auth.types";
import { removeFromStorage, saveTokenStorage } from "./auth-token.services";

export type AuthType = "login" | "register";

class AuthService {
	async main(type: AuthType, data: IAuthFormType) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data
		);

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

		return response;
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			"/auth/login/access-token"
		);

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

		return response;
	}

	async logout() {
		const response = await axiosClassic.post<boolean>("/auth/logout");

		if (response.data) removeFromStorage();

		return response;
	}
}

const authService = new AuthService();
export default authService;
