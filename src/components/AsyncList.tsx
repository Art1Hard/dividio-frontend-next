import { dashboardWidgetItemAnimation } from "@/constants/animation.constants";
import { IAsyncQuery } from "@/types/async-query.types";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { JSX } from "react";
import EmptyData from "./ui/EmptyData";

interface ListProps<T extends Record<string, any>> {
	query: IAsyncQuery<T>;
	loader?: JSX.Element;
	errorElement?: JSX.Element;
	emptyText?: string;
	renderItem: (item: T, index: number) => JSX.Element;
}

export const AsyncList = <T extends Record<string, any>>({
	query,
	loader,
	errorElement,
	emptyText,
	renderItem,
}: ListProps<T>) => {
	const shouldReduceMotion = useReducedMotion();

	if (query.isLoading) return loader;
	if (query.isError) return errorElement;
	if (!query.data || query.data.length <= 0)
		return emptyText && <EmptyData>{emptyText}</EmptyData>;

	return (
		<AnimatePresence>
			{query.data.map((item, index) => (
				<motion.div
					key={(item as any).id ?? index}
					layout={!shouldReduceMotion}
					variants={
						shouldReduceMotion
							? undefined
							: dashboardWidgetItemAnimation.variants
					}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={dashboardWidgetItemAnimation.transition}>
					{renderItem(item, index)}
				</motion.div>
			))}
		</AnimatePresence>
	);
};

export default AsyncList;
