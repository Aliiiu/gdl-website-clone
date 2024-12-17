type MetadataProps = {
  title: string;
};

export const generatePageMetadata = ({ title }: MetadataProps) => {
  const baseDescription =
    "A leading diversified financial institution creating wealth and transforming society";

  return {
    title: `${title} | GDL`,
    description: baseDescription,
    openGraph: {
      title: `${title} | GDL`,
      description: baseDescription,
      type: "website",
      siteName: "gdl",
      twitter: {
        card: "summary_large_image",
        title: `${title} | GDL`,
        description: baseDescription,
        creator: "@gdl",
      },
    },
  };
};
