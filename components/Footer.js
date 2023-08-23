import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contact}>
        <h1 className={styles.contact_h1}>Contact me</h1>
        <p className={styles.contact_p}>
          Interested in talking together? We should queue up a time to chat.
          I'll not buy the coffee.
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
          height={25}
          width={75}
          loading="lazy"
          className={styles.footer_image}
          src="/footer_logo.svg"
          alt="footer logo"
        />
        <p data-aos="fade-up" className={styles.footer_p}>
          I keep learning , listening & growing and experementing.
        </p>
        <div data-aos="fade-right" className={styles.icons}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/gouderhicham/"
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
            href="https://www.linkedin.com/in/gouder-hicham619/"
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
            href="https://stackoverflow.com/users/14529403/gouder-hicham"
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
