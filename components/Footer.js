import Link from "next/link";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contact}>
        <h1 className={styles.contact_h1}>Contact me</h1>
        <p className={styles.contact_p}>
          Interested in working together? We should queue up a time to chat.
          I'll buy the coffee.
        </p>
        <Link href={"contact"} className={styles.contact_button}>
          <img src="/contact.png" />
          Contact me
        </Link>
      </section>
      <div className={styles.footer_real}>
        <img className={styles.footer_image} src="/footer_logo.svg" />
        <p className={styles.footer_p}>
          I keep learning , listening & growing and experementing.
        </p>
        <div className={styles.icons}>
          <a target={"_blank"} href="https://github.com/gouderhicham/">
            <img src="/github-purple.png" />
          </a>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/gouder-hicham619/"
          >
            <img src="/linked.png" />
          </a>
          <a
            target={"_blank"}
            href="https://stackoverflow.com/users/14529403/gouder-hicham"
          >
            <img src="/stack-overflow.png" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
