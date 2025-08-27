import { axiosWithAuth } from "@/api/interceptors";
import { IncomeSchema } from "@/components/income/models/income.schema";
import { IIncome, IIncomeData } from "@/types/income.types";

class IncomeService {
	private BASE_URL = "income";

	async getAll() {
		const response = await axiosWithAuth.get<IIncomeData>(this.BASE_URL);
		return response.data;
	}

	async create(data: IncomeSchema) {
		const response = await axiosWithAuth.post<IIncome>(this.BASE_URL, data);
		return response.data;
	}

	async edit(id: string, data: IncomeSchema) {
		const response = await axiosWithAuth.put<IIncome>(
			`${this.BASE_URL}/${id}`,
			data
		);
		return response.data;
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IIncome>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}
}

const incomeService = new IncomeService();
export default incomeService;
