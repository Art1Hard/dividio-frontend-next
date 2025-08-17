const EyeOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		viewBox="0 0 24 24"
		className="w-5 h-5">
		<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
		<circle cx={12} cy={12} r={3} />
	</svg>
);

export default EyeOpenIcon;
