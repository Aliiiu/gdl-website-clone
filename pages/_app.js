import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import App from "next/app";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return { ...pageProps };
};

export default MyApp;
