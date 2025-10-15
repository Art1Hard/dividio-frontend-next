import { HiCalendar, HiChartPie, HiShieldCheck } from "react-icons/hi2";

const FeaturesSection = () => {
	return (
		<section>
			<ul className="flex flex-col md:flex-row items-center justify-around py-16 md:py-24 px-4 sm:px-6 gap-8 md:gap-12">
				<li className="max-w-xs text-center">
					<HiChartPie className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 text-accent" />
					<h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
						Визуальные диаграммы
					</h2>
					<p className="text-sm sm:text-base">
						Следи за тем, на что уходят деньги и как распределяется бюджет.
					</p>
				</li>
				<li className="max-w-xs text-center">
					<HiShieldCheck className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 text-accent" />
					<h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
						Безопасность
					</h2>
					<p className="text-sm sm:text-base">
						Все данные хранятся безопасно, и никто не увидит твои финансовые
						детали.
					</p>
				</li>
				<li className="max-w-xs text-center">
					<HiCalendar className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 text-accent" />
					<h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
						Планирование доходов
					</h2>
					<p className="text-sm sm:text-base">
						Разделяй доходы на необходимые расходы, сбережения и хотелки.
					</p>
				</li>
			</ul>
		</section>
	);
};

export default FeaturesSection;
