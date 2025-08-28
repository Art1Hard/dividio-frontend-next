import { DashboardWrapperProps } from "./interfaces/dasboard-wrapper.interface";

const WrapperItemContent = ({ children }: DashboardWrapperProps) => {
	return <div className="flex gap-3">{children}</div>;
};

export default WrapperItemContent;
