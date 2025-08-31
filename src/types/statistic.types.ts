import { IconType } from "react-icons";

export interface IStatistic {
	totalIncomesAmount: number;
	totalIncomes: number;
	freePercentage: number;
}

export interface IStatisticItem {
	title: string;
	content: string;
	icon: IconType;
}
