import { Raleway } from "next/font/google";
import "./globals.css";
import { generatePageMetadata } from "@/utils/metadata";
import { ClientProvider } from "@/components/client-provider";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/global/google-analytics";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["Gilroy", "sans-serif"],
});

export const generateMetadata = () => {
  return generatePageMetadata();
};

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;

  const {
    children
  } = props;

  const hideLayout = searchParams?.hidelayout === "true";

  return (
    <html lang="en">
      <GoogleAnalytics />
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
