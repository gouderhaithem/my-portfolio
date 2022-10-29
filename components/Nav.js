import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Nav.module.css";
const Nav = () => {
  const [toggled, settoggled] = useState(false);
  return (
    <nav className={`${styles.nav_container}`}>
      <Link className={styles.logo} href={"/"}>
        <Image alt="logo" src={"/logo.svg"} height={65} width={65} />
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
            let projects = document.querySelector(".projects");
            projects.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          Projects
        </p>
        <a href="../fe.pdf" download>
          Resumate
        </a>
        <Link className={styles.contact_btn} href={"/contact"}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
