import useProfile from "@/hooks/useProfile";
import CreateAllocationColor from "./allocation-color/create/CreateAllocationColor";
import AllocationColorItem from "./allocation-color/AllocationColorItem";

const Settings = () => {
	const { profile } = useProfile();

	return (
		<>
			<h2 className="text-sm font-medium text-secondary-800 mb-4">
				Цвета распределений:
			</h2>
			<div className="flex gap-2 overflow-x-auto">
				<CreateAllocationColor />
				{profile?.colors.map((color) => (
					<AllocationColorItem key={color.id} color={color} />
				))}
			</div>
		</>
	);
};

export default Settings;
