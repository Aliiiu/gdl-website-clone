import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import App from "next/app";
import { ToastContainer } from "react-toastify";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer hideProgressBar={true} />
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
