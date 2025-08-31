import { getFirstLetter } from "@/utils/getFirstLetter";

interface AvatarProps {
	name: string;
	size?: number;
	bgColor?: string;
	textColor?: string;
}

const Avatar = ({
	name,
	size = 12,
	bgColor = "bg-indigo-600",
	textColor = "text-white",
}: AvatarProps) => {
	const firstLetter = getFirstLetter(name);

	return (
		<div
			className={`
        ${bgColor} ${textColor} 
        rounded-full 
        flex items-center justify-center
        font-bold
      `}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				fontSize: `${size / 2}px`,
			}}>
			{firstLetter}
		</div>
	);
};

export default Avatar;
