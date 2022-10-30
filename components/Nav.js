import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Nav.module.css";
import { useRouter } from "next/router";
const Nav = () => {
  const [toggled, settoggled] = useState(false);
  const router = useRouter();
  return (
    <nav className={`${styles.nav_container}`}>
      <Link className={styles.logo} href={"/"}>
        <Image
          loading="lazy"
          alt="logo"
          src={"/logo.svg"}
          height={65}
          width={65}
        />
      </Link>
      <div
        onClick={() => {
          settoggled((old) => !old);
        }}
        className={styles.hamburger}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`${styles.nav_links} ${
          !toggled ? "transform_menu" : "transform_back"
        }`}
      >
        <p
          onClick={() => {
            if (router.pathname === "/contact") {
              router.push("/");
            } else {
              let projects = document.querySelector(".projects");
              projects.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }}
        >
          Projects
        </p>
        <a href="../fe.pdf" download>
          Resume
        </a>
        <Link className={styles.contact_btn} href={"/contact"}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
