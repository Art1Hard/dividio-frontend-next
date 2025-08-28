import { axiosWithAuth } from "@/api/interceptors";
import { AllocationSchema } from "@/components/dashboard/allocation/models/allocation.schema";
import { IAllocation, IAllocationData } from "@/types/allocation.types";

class AllocationService {
	private BASE_URL = "allocation";

	async getAll() {
		const response = await axiosWithAuth.get<IAllocationData>(this.BASE_URL);
		return response.data;
	}

	async create(data: AllocationSchema) {
		const response = await axiosWithAuth.post<IAllocation>(this.BASE_URL, data);
		return response.data;
	}

	// async edit(id: string, data: IncomeSchema) {
	// 	const response = await axiosWithAuth.put<IIncome>(
	// 		`${this.BASE_URL}/${id}`,
	// 		data
	// 	);
	// 	return response.data;
	// }

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IAllocation>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}
}

const allocationService = new AllocationService();
export default allocationService;
