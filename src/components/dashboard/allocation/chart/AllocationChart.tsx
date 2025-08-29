import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	ResponsiveContainer,
	type TooltipProps,
} from "recharts";
import useFetchAllocations from "@/hooks/useFetchAllocations";
import { progressColors } from "@/constants/colors";
import { IAllocation } from "@/types/allocation.types";
import useBreakpoint from "@/hooks/useBreakpoint";

const AllocationChart = () => {
	const breakpoint = useBreakpoint();
	const { allocationData } = useFetchAllocations();

	if (!allocationData) return null;

	return (
		<div className="h-[320px] w-full">
			<ResponsiveContainer>
				<PieChart>
					<Pie
						className="font-medium"
						animationBegin={0}
						animationDuration={600}
						stroke="#fff"
						data={allocationData.allocations}
						cx="50%"
						cy="50%"
						outerRadius={125}
						dataKey="percentage"
						label={
							breakpoint === "sm"
								? (allocation: IAllocation) => allocation.title
								: undefined
						}>
						{allocationData.allocations.map((allocation) => (
							<Cell
								key={allocation.id}
								fill={progressColors[allocation.color]}
							/>
						))}
					</Pie>
					<Tooltip content={<CustomTooltip />} />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

const CustomTooltip = ({
	active,
	payload,
}: TooltipProps<IAllocation["amount"], IAllocation["title"]>) => {
	if (!active || !payload?.length) return null;
	const amount = payload[0].payload.amount.toLocaleString("ru-RU");

	return (
		<p className="bg-primary-100 px-4 py-3 rounded-lg shadow-md text-sm">
			{payload[0].payload.title}: {amount} ₽
		</p>
	);
};

export default AllocationChart;
