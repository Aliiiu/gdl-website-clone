import { Neonderthaw } from "next/font/google";
import "./globals.css";

const neonderthaw = Neonderthaw({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	fallback: ["Gilroy", "sans-serif"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${neonderthaw.className} antialiased`}>{children}</body>
		</html>
	);
}
