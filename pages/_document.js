import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Financial Freedom For Everyone" />
          <link rel="icon" type="image/svg" href="svgs/gdllogo.svg" />
          <meta
            name="description"
            content="A leading diversified financial institution creating wealth and transforming society"
          />
          <meta
            name="keywords"
            content="gdl, finance, asset management, investment, financial advisory, money, wealth, financial institution, transforming society, gdl canary fund, gdl Value Note, gdl income fund, money market fund, stockbrocking, long term note, leasing, lending, securities trading"
          />
          <meta property="og:url" content="https://gdl.com.ng/" />
          <meta
            property="og:description"
            content="A leading diversified financial institution creating wealth and transforming society"
          />
          <meta
            property="og:image"
            content="https://gdl.com.ng/svgs/gdllogo.svg"
          />
          <meta name="theme-color" content="#992323" />
        </Head>
        <body className="dark:bg-black bg-white dark:text-white text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
