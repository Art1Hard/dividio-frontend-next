const DashboardWidgetItemSkeleton = ({ count }: { count: number }) => {
	if (count <= 0) return null;

	return Array.from({ length: count }, (_, index) => index).map((index) => (
		<div
			key={index}
			className="bg-primary-300/50 rounded-lg shadow-sm animate-pulse w-full h-35 sm:h-20"
		/>
	));
};

export default DashboardWidgetItemSkeleton;
