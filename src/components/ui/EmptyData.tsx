import { HTMLAttributes } from "react";

const EmptyData = (props: HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p
			{...props}
			className="font-medium text-secondary-500 text-sm sm:text-base">
			{props.children}
		</p>
	);
};

export default EmptyData;
