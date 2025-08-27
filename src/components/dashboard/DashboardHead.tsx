const DashboardHead = () => {
	return (
		<div className="text-center">
			<h1 className="font-bold text-balance text-2xl sm:text-3xl sm:mb-2">
				<span className="hidden sm:inline">Добро пожаловать!</span>
				<span className="sm:hidden">Ваш Дашборд</span>
			</h1>
			<p className="text-black/70 hidden sm:block">
				Ваш финансовый обзор на сегодня
			</p>
		</div>
	);
};

export default DashboardHead;
