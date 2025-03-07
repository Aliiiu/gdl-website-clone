type MetadataProps = {
	title?: string;
};

export const generatePageMetadata = ({ title }: MetadataProps = {}) => {
	const defaultTitle = "GDL | Build Wealth Comfortably";
	const template = "%s | GDL";
	const baseDescription = "";

	const pageTitle = title ? template.replace("%s", title) : defaultTitle;

	return {
		title: pageTitle,
		description: baseDescription,
		openGraph: {
			title: pageTitle,
			description: baseDescription,
			type: "website",
			siteName: "gdl",
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description: baseDescription,
			creator: "@gdl",
		},
	};
};
