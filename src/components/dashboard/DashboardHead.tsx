"use client";

import useProfile from "@/hooks/useProfile";

const DashboardHead = () => {
	const { profile } = useProfile();

	return (
		<div className="text-center">
			<h1 className="font-bold text-balance text-2xl sm:text-3xl sm:mb-2">
				<span className="hidden sm:inline">
					Добро пожаловать{profile?.name && " " + profile.name}!
				</span>
				<span className="sm:hidden">Ваш Дашборд</span>
			</h1>
			<p className="text-subtitle/70 hidden sm:block dark:text-subtitle">
				Ваш финансовый обзор на сегодня
			</p>
		</div>
	);
};

export default DashboardHead;
