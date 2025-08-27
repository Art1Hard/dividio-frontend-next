import { useState, useEffect } from "react";

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
};

type Breakpoint = keyof typeof breakpoints;

const useBreakpoint = (): Breakpoint | null => {
	const [width, setWidth] = useState<number | null>(null);

	useEffect(() => {
		const onResize = () => setWidth(window.innerWidth);

		onResize();

		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	if (width === null) return null;

	if (width >= breakpoints.sm) return "sm";
	if (width >= breakpoints.md) return "md";
	if (width >= breakpoints.lg) return "lg";
	return "xl";
};

export default useBreakpoint;
