import "../styles/globals.css";
import Nav from "../components/Nav";
import "aos/dist/aos.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="pIqneOlHg3gGNxmtgb1Et2p_JDrgdHxR8R3hfl9j7Yg"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
