import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import App from "next/app";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
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
