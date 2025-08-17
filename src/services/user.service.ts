import { axiosWithAuth } from "@/api/interceptors";
import type { IUser, TypeUserFormState } from "@/types/user.types";

class UserService {
	private BASE_URL = "user";

	async getProfile() {
		const response = await axiosWithAuth.get<IUser>(this.BASE_URL);
		return response.data;
	}

	async update(data: TypeUserFormState) {
		const response = await axiosWithAuth.put(this.BASE_URL, data);
		return response.data;
	}
}

const userService = new UserService();
export default userService;
