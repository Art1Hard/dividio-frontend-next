import Statistic from "./statistic/Statistic";

const Dashboard = () => {
	return (
		<div className="flex-1 max-w-6xl w-full mx-auto py-8 px-4 sm:px-6">
			<div className="text-center mb-4">
				<h1 className="font-bold text-balance text-2xl sm:text-3xl sm:mb-2">
					<span className="hidden sm:inline">Добро пожаловать!</span>
					<span className="sm:hidden">Ваш Дашборд</span>
				</h1>
				<p className="text-black/70 hidden sm:block">
					Ваш финансовый обзор на сегодня
				</p>
			</div>

			<Statistic />
		</div>
	);
};

export default Dashboard;
