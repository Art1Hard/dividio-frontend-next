class Routes {
	private root = "/";

	HOME = this.root;
	SIGN_IN = `${this.root}sign-in`;
	SIGN_UP = `${this.root}sign-up`;
	DASHBOARD = `${this.root}dashboard`;
	PROFILE = `${this.root}profile`;
}

export const ROUTES = new Routes();
