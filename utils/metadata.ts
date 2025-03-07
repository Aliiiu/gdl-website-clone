import type { Metadata } from "next";

type MetadataProps = {
	title?: string;
};

export const generatePageMetadata = ({
	title,
}: MetadataProps = {}): Metadata => {
	const defaultTitle = "GDL | Build Wealth Comfortably";
	const template = "%s | GDL";
	const baseDescription =
		"A leading diversified financial institution creating wealth and transforming society";

	const pageTitle = title ? template.replace("%s", title) : defaultTitle;

	return {
		title: {
			default: defaultTitle,
			template: template,
		},
		description: baseDescription,
		openGraph: {
			title: pageTitle,
			description: baseDescription,
			type: "website",
			siteName: "gdl",
			images: [
				{
					url: "https://gdl.ng/images/og-image.png",
					width: 1200,
					height: 630,
					alt: "GDL",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description: baseDescription,
			creator: "@gdl",
			images: ["https://gdl.ng/images/og-image.png"],
		},
	};
};
