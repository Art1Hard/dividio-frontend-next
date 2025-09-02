import useProfile from "@/hooks/useProfile";
import { LuPlus } from "react-icons/lu";
import CreateAllocationColor from "./allocation-color/create/CreateAllocationColor";

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
					<div
						key={color.id}
						className="w-9 h-9 rounded-full shrink-0"
						style={{ backgroundColor: color.value }}
					/>
				))}
			</div>
		</>
	);
};

export default Settings;
