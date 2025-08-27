import { MouseEvent, MouseEventHandler, PropsWithChildren } from "react";
import { BiX } from "react-icons/bi";

interface BaseModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
}

const BaseModal = ({
	title,
	children,
	isOpen,
	onClose,
}: PropsWithChildren<BaseModalProps>) => {
	const overlayHandle = (e: MouseEvent<HTMLDivElement>): void =>
		e.target === e.currentTarget ? onClose() : undefined;

	return (
		isOpen && (
			<div
				className="fixed inset-0 bg-black/50 flex justify-center overflow-y-auto z-50 cursor-pointer p-4"
				onClick={(e) => overlayHandle(e)}>
				<div className="bg-primary-200 p-4 pt-16 h-fit my-auto rounded-xl w-full max-w-md relative cursor-auto">
					<div className="absolute top-3 right-4 left-4 flex items-center justify-between gap-x-3">
						<h2 className="text-nowrap overflow-hidden overflow-ellipsis font-medium text-lg">
							{title}
						</h2>
						<button onClick={onClose} className="cursor-pointer p-2">
							<BiX size={24} />
						</button>
					</div>
					{children}
				</div>
			</div>
		)
	);
};

export default BaseModal;
