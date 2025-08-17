"use client";

import { useEffect } from "react";

const useWarnUnsavedChanges = (isDirty: boolean) => {
	// ====== beforeunload для вкладки ======
	useEffect(() => {
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			if (isDirty) {
				e.preventDefault();
				e.returnValue = ""; // обязательно
			}
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => window.removeEventListener("beforeunload", handleBeforeUnload);
	}, [isDirty]);
};

export default useWarnUnsavedChanges;
