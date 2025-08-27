import { useCallback, useState } from "react";

const useModal = (initialOpen = false) => {
	const [isOpen, setIsOpen] = useState(initialOpen);

	const open = useCallback(() => {
		document.body.style.overflow = "hidden";
		setIsOpen(true);
	}, []);

	const close = useCallback(() => {
		document.body.style.overflow = "";
		setIsOpen(false);
	}, []);

	const toggle = useCallback(() => {
		setIsOpen((prev) => {
			const next = !prev;
			document.body.style.overflow = next ? "hidden" : "";
			return next;
		});
	}, []);

	return { isOpen, open, close, toggle };
};

export default useModal;
