import { Raleway } from "next/font/google";
import "./globals.css";
import { generatePageMetadata } from "@/utils/metadata";
import { ClientProvider } from "@/components/client-provider";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

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
  searchParams,
}: {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const hideLayout = searchParams?.hidelayout === "true";

  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <ClientProvider>
          {!hideLayout && <Topbar />}
          {children}
          {!hideLayout && <Footer />}
        </ClientProvider>
      </body>
    </html>
  );
}
