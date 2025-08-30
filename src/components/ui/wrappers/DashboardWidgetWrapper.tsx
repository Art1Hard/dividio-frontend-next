import { JSX, PropsWithChildren } from "react";
import { IconType } from "react-icons";
interface DashboardWidgetWrapperProps {
	title: string;
	icon: JSX.Element;
	headerButton: JSX.Element;
}

const DashboardWidgetWrapper = ({
	children,
	title,
	icon,
	headerButton,
}: PropsWithChildren<DashboardWidgetWrapperProps>) => {
	return (
		<div className="max-w-sm mx-auto bg-primary-200 rounded-2xl p-4 shadow-md sm:max-w-full sm:p-6 overflow-x-hidden">
			<div className="flex items-center justify-between mb-5 gap-2">
				<div className="flex items-center gap-2">
					{icon}
					<h2 className="text-lg font-semibold">{title}</h2>
				</div>
				{headerButton}
			</div>
			{children}
		</div>
	);
};

export default DashboardWidgetWrapper;
