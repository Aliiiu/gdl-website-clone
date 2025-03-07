type MetadataProps = {
	title?: string;
};

export const generatePageMetadata = ({ title }: MetadataProps = {}) => {
	const defaultTitle = "GDL | Build Wealth Comfortably";
	const template = "%s | GDL";
	const baseDescription =
		"A leading diversified financial institution creating wealth and transforming society";

	const pageTitle = title ? template.replace("%s", title) : defaultTitle;

	return {
		title: pageTitle,
		description: baseDescription,
		openGraph: {
			title: pageTitle,
			description: baseDescription,
			type: "website",
			siteName: "gdl",
			images: [
				{
					url: "/og-image-default.png",
					width: 900,
					height: 430,
					alt: baseDescription,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description: baseDescription,
			creator: "@gdl",
		},
	};
};
