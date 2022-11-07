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
          content="wKq_AE2WgOioSjPgF6wHt6HNULSiyFpOgMrQ0hmL08k"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
