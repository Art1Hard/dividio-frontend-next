import { DashboardWrapperProps } from "./interfaces/dasboard-wrapper.interface";

const WrapperItemHeader = ({ children }: DashboardWrapperProps) => {
	return <div className="flex-1 mb-4 sm:mb-0">{children}</div>;
};

export default WrapperItemHeader;
