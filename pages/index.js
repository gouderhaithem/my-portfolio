import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gouder Hicham | Home Page </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={`${styles.main}`}>
        <header className={styles.header}>
          <h1>Designer, Frontend Developer & Mentor</h1>
          <p>
            I design and code beautifully simple things, and I love what I do.
          </p>

          <img
            className={styles.avatar}
            src={"/mf-avatar.svg"}
            alt="hero-image-logo"
          />
          <img
            className={styles.home_bg}
            src={"/home-bg.svg"}
            alt="hero-image-logo"
          />
        </header>
      </main>
    </div>
  );
}
