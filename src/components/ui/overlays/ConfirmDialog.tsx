import BaseButton from "../buttons/BaseButton";

interface ConfirmDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title?: string;
}

const ConfirmDialog = ({
	title,
	isOpen,
	onClose,
	onConfirm,
}: ConfirmDialogProps) => {
	return (
		isOpen && (
			<div
				className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 cursor-pointer"
				onClick={onClose}>
				<div
					className="bg-slate-200 dark:bg-slate-800 rounded-xl p-6 max-w-md w-full shadow-lg cursor-default"
					onClick={(e) => e.stopPropagation()}>
					<h2 className="text-xl font-semibold mb-2 text-nowrap overflow-x-hidden overflow-ellipsis">
						{title}
					</h2>
					<p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
						Это действие{" "}
						<span className="text-red-500 uppercase">необратимо</span>! Вы
						уверены, что хотите продолжить?
					</p>

					<div className="flex justify-end gap-3">
						<BaseButton color="secondary" onClick={onClose}>
							Отмена
						</BaseButton>
						<BaseButton className="font-semibold" onClick={onConfirm}>
							Подтвердить
						</BaseButton>
					</div>
				</div>
			</div>
		)
	);
};

export default ConfirmDialog;
