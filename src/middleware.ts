import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth-token.services";
import { ROUTES } from "./config/routes.config";

const isPublicRoute = (pathname: string) => {
	const publicRoutes = [ROUTES.HOME];

	return (
		pathname.startsWith("/_next/") ||
		pathname.startsWith("/favicon.ico") ||
		pathname.startsWith("/api/") ||
		publicRoutes.includes(pathname)
	);
};

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request;
	const { pathname } = request.nextUrl;

	if (isPublicRoute(pathname)) {
		return NextResponse.next();
	}

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

	const isAuthPage =
		url.includes(ROUTES.SIGN_IN) || url.includes(ROUTES.SIGN_UP);

	if (isAuthPage && refreshToken)
		return NextResponse.redirect(new URL(ROUTES.DASHBOARD, url));

	if (isAuthPage) return NextResponse.next();

	if (!refreshToken) return NextResponse.redirect(new URL(ROUTES.SIGN_IN, url));

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/profile/:path*", "/sign-in", "/sign-up"],
};
