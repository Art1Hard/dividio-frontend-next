import StatisticItem from "./StatisticItem";

const Statistic = () => {
	return (
		<div className="flex flex-col gap-4 justify-between items-center sm:flex-row sm:flex-wrap sm:justify-center">
			<StatisticItem title="Общий доход" content="417 000 ₽" />
			<StatisticItem title="Источников дохода" content="2 шт." />
			<StatisticItem title="Нераспределено" content="55%" />
		</div>
	);
};

export default Statistic;
