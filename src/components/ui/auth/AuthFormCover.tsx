import clsx from "clsx";
import { PropsWithChildren } from "react";

interface AuthFormCoverProps {
	title: string;
	className?: string;
}

const AuthFormCover = ({
	title,
	className,
	children,
}: PropsWithChildren<AuthFormCoverProps>) => {
	return (
		<div className="flex-1 flex justify-center h-full bg-primary-200 sm:bg-transparent sm:py-8">
			<div
				className={clsx(
					"w-full max-w-md bg-primary-200 p-8 sm:rounded-2xl sm:shadow-lg",
					className
				)}>
				<h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
				{children}
			</div>
		</div>
	);
};

export default AuthFormCover;
