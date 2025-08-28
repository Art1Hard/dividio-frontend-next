import { IAllocation } from "@/types/allocation.types";
import AllocationItem from "./AllocationItem";

const AllocationList = ({ data }: { data: IAllocation[] }) => {
	return data.map((item) => <AllocationItem key={item.id} item={item} />);
};

export default AllocationList;
