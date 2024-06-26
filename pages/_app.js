import "../public/assets/scss/app.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TapToTop from "../layout/TapToTop";
import { store } from "../redux-toolkit/store";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";
import "react-toastify/dist/ReactToastify.css";
import { ConfigDB } from "../config/themeCustomizerConfig";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      document.documentElement.style.setProperty(
        "--theme-default",
        ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : "#163b64"
      );
      document.documentElement.style.setProperty(
        "--theme-default2",
        ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : "#00648D"
      );
    });
    document.documentElement.style.setProperty(
      "--theme-default",
      ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : "#163b64"
    );
    document.documentElement.style.setProperty(
      "--theme-default2",
      ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : "#00648D"
    );
  }, [router.events]);

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C508DE32EC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C508DE32EC');`,
          }}
        ></script>
        <title>UNO Real Estate</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="UNO - Real Estate" />
        <meta name="keywords" content="UNO, Real Estate" />
        <meta name="author" content="UNO" />
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i');
          @import
          url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap');
          @import
          url('https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i');
        </style>
        <link rel="icon" href="/icon.svg" type="image/x-icon" />
        <title>UNO - Real Estate</title>
        <meta
          name="google-site-verification"
          content="fjgGzodvfq1RcGZ1_PAxUfAIoZM2aF3qOgoNaC88KBY"
        />
      </Head>
      <Provider store={store}>
        <>
          <Component {...pageProps} />
          <TapToTop />
        </>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
