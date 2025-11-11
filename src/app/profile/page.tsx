import type { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Profile from "./Profile";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Профиль",
	...NO_INDEX_PAGE,
};

export default function ProfilePage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Profile />
		</Suspense>
	);
}
