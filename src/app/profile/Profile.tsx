"use client";

import BaseButton from "@/components/ui/buttons/BaseButton";
import useLogout from "./hooks/useLogout";
import { LuCornerDownLeft, LuSettings2 } from "react-icons/lu";
import ProfileForm from "@/components/profile/ProfileForm";
import Settings from "@/components/profile/settings/Settings";
import { useRouter, useSearchParams } from "next/navigation";

const Profile = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const isSettings = searchParams.get("tab") === "settings";

	const { logout, isPending: isLogoutPending } = useLogout();

	const toggleTab = () => {
		router.push(`/profile${!isSettings ? "?tab=settings" : ""}`);
	};

	return (
		<div className="flex-1 bg-primary-200 flex justify-center sm:bg-transparent py-8">
			<div className="bg-primary-200 p-6 w-full h-full max-w-md @container sm:my-auto sm:h-auto sm:shadow-md sm:rounded-xl">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-center font-bold text-2xl">
						{isSettings ? "Настройки" : "Профиль"}
					</h2>
					<button
						type="button"
						className="flex flex-col items-center gap-1 text-secondary-700 hover:text-secondary-950 transition cursor-pointer p-2 sm:flex-row"
						onClick={toggleTab}>
						{isSettings ? (
							<LuCornerDownLeft className="w-6 h-6 sm:w-4.5 sm:h-4.5" />
						) : (
							<LuSettings2 className="w-6 h-6 sm:w-4.5 sm:h-4.5" />
						)}
						<span className="hidden sm:inline text-sm font-medium">
							{isSettings ? "Вернуться" : "Настройки"}
						</span>
					</button>
				</div>
				{isSettings ? <Settings /> : <ProfileForm />}

				<hr className="border-secondary-500 my-4" />

				<BaseButton
					disabled={isLogoutPending}
					color="danger"
					className="w-full font-semibold"
					onClick={() => logout()}>
					{isLogoutPending ? "Выходим..." : "Выйти"}
				</BaseButton>
			</div>
		</div>
	);
};

export default Profile;
