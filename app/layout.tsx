import { Raleway } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "./components/client-provider";
import { generatePageMetadata } from "./utils/metadata";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["Gilroy", "sans-serif"],
});

export const generateMetadata = () => {
  return generatePageMetadata();
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
