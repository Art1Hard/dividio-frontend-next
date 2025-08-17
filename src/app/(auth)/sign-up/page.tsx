import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import SignUp from "./SignUp";

export const metadata: Metadata = {
	title: "SignUp",
	...NO_INDEX_PAGE,
};

export default function SignUpPage() {
	return <SignUp />;
}
