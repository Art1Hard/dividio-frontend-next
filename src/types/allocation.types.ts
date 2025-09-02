export interface IAllocation {
	id: string;
	title: string;
	percentage: number;
	amount: number;
	color: IAllocationColor;
}

export interface IAllocationColor {
	id: string;
	name: string;
	value: string;
}
