import { axiosWithAuth } from "@/api/interceptors";
import { AllocationColorSchema } from "@/components/profile/settings/allocation-color/models/allocation-color.schema";
import { IAllocationColor } from "@/types/allocation.types";

export interface IEditAllocationColor {
	id: string;
	data: AllocationColorSchema;
}

class AllocationColorService {
	private BASE_URL = "allocation-color";

	async getAll() {
		const response = await axiosWithAuth.get<IAllocationColor[]>(this.BASE_URL);
		return response.data;
	}

	async create(data: AllocationColorSchema) {
		const response = await axiosWithAuth.post<IAllocationColor>(
			this.BASE_URL,
			data
		);
		return response.data;
	}

	async edit({ id, data }: IEditAllocationColor) {
		const response = await axiosWithAuth.put<IAllocationColor>(
			`${this.BASE_URL}/${id}`,
			data
		);
		return response.data;
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IAllocationColor>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}
}

const allocationColorService = new AllocationColorService();
export default allocationColorService;
