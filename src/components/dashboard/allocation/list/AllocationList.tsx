import { IAllocation } from "@/types/allocation.types";
import AllocationItem from "./AllocationItem";
import { AnimatePresence } from "framer-motion";

const AllocationList = ({ data }: { data: IAllocation[] }) => {
	return (
		<AnimatePresence>
			{data.map((item) => (
				<AllocationItem key={item.id} item={item} />
			))}
		</AnimatePresence>
	);
};

export default AllocationList;
