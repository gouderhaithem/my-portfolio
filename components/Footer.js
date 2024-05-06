import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contact}>
        <h1 className={styles.contact_h1}>Contact me</h1>
        <p className={styles.contact_p}>
          Excited to have a conversation ? Let's find a time that works. And
          don't worry, I'll cover the coffee!
        </p>
        <Link href={"contact"} className={styles.contact_button}>
          <Image
            src="/contact.png"
            height={25}
            width={25}
            alt="contact svg"
            loading="lazy"
          />
          Contact me
        </Link>
      </section>
      <div className={styles.footer_real}>
        <Image
          data-aos="fade-up"
          height={100}
          width={100}
          loading="lazy"
          className={styles.footer_image}
          src="/logo31.svg"
          alt="footer logo"
        />
        <p data-aos="fade-up" className={styles.footer_p}>
          I keep learning , listening & growing and experementing.
        </p>
        <div data-aos="fade-right" className={styles.icons}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/gouderhaithem"
          >
            <Image
              height={25}
              width={25}
              loading="lazy"
              className={styles.img}
              src="/github-purple.png"
              alt="github image"
            />
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/in/gouder-haithem-689164244/"
          >
            <Image
              height={25}
              width={25}
              loading="lazy"
              className={styles.img}
              src="/linked.png"
              alt="linkedin image"
            />
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://stackoverflow.com/users/22660071/gouder-haithem"
          >
            <Image
              height={25}
              width={25}
              loading="lazy"
              className={styles.img}
              src="/stack-overflow.png"
              alt="stacke over flow image"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
