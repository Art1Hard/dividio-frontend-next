import { axiosWithAuth } from "@/api/interceptors";
import { IStatistic } from "@/types/statistic.types";

class StatisticService {
	private BASE_URL = "statistic";

	async get() {
		const response = await axiosWithAuth.get<IStatistic>(this.BASE_URL);
		return response.data;
	}
}

const statisticService = new StatisticService();
export default statisticService;
