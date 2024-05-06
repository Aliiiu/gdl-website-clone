import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/ReactToastify.min.css";
import GoogleAnalytics from "../components/Layout/GoogleAnalytics";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics />
      <NextNProgress color="#9A2333" />
      <Layout>
        <Component {...pageProps} />
        <ToastContainer hideProgressBar={true} />
      </Layout>
    </>
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
