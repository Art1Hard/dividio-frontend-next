import { useState } from "react";

const useChartView = () => {
	const [isChartView, setIsChartView] = useState(false);

	const toggleChartView = () => setIsChartView((prev) => !prev);

	return { isChartView, toggleChartView };
};

export default useChartView;
