import { type FC } from "react";
import cn from "clsx";
import useDelayValue from "@/hooks/useDelayValue";
import { allocationColors } from "@/constants/colors";

type ProgressBarProps = {
	label: string;
	percent?: number;
	amount?: number;
	color?: string;
};

const ProgressBar: FC<ProgressBarProps> = ({
	label,
	percent = 0,
	amount = 0,
	color = "gray",
}) => {
	const delayedPercent = useDelayValue(percent);
	const progressColor = allocationColors[color];

	return (
		<div className="sm:pb-4">
			<div className="flex flex-col justify-between mb-2 sm:flex-row">
				<h3 className="text-sm font-medium mb-1 sm:mb-0">{label}</h3>
				<p className="text-sm">
					{percent}% —{" "}
					<span className="font-semibold">{amount.toLocaleString("ru")} ₽</span>
				</p>
			</div>
			<div className="w-full h-3 bg-primary-300 rounded-full overflow-hidden">
				<div
					className={cn("h-full transition-all duration-300")}
					style={{
						backgroundColor: `${progressColor}`,
						width: `${delayedPercent}%`,
					}}></div>
			</div>
		</div>
	);
};

export default ProgressBar;
