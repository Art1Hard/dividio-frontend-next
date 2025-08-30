import { Variants } from "framer-motion";

interface IAnimation {
	variants: Variants;
	transition: Record<string, unknown>;
}

export const containerVariants: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export const itemVariants: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export const dashboardWidgetItemAnimation: IAnimation = {
	variants: {
		initial: { opacity: 0, transform: "translateX(-35%)" },
		animate: { opacity: 1, transform: "translateX(0)" },
		exit: { opacity: 0, transform: "translateX(35%)" },
	},
	transition: { duration: 0.25, layout: { duration: 0.7, type: "spring" } },
};
