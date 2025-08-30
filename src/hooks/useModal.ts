import { useCallback, useEffect, useState } from "react";

const useModal = (initialOpen = false) => {
	const [isOpen, setIsOpen] = useState(initialOpen);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);
	const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return { isOpen, open, close, toggle };
};

export default useModal;
