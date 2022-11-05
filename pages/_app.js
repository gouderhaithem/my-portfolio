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
          content="xnBqd2s9vl_rUtHUk6UXbusGQFgww8wNiWVH0FwornQ"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
