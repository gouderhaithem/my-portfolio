import styles from "../styles/Collumns.module.css";
import Image from "next/image";
const Collumns = () => {
  return (
    <section className={styles.grid_main}>
      <div data-aos="fade-right" className={styles.grid_col}>
        <div className={`${styles.grid_img} align-center`}>
          <Image
            className={styles.img}
            height={30}
            width={30}
            loading="lazy"
            src={"/stacks.svg"}
            alt="stacks"
          />
        </div>

        <h3>Technologies</h3>
        <p className={styles.descreption}>
          New technologies are introduced every day so i always choose the best
          choices .
        </p>
        <span className={styles.title}>Technologies i use:</span>
        <p>Git, Apis, Firebase, Socket io, mySql, MongoDB</p>
      </div>
      <div data-aos="fade-left" className={styles.grid_col}>
        <div className={`${styles.grid_img} align-center`}>
          <Image
            className={styles.img}
            height={30}
            width={30}
            loading="lazy"
            src={"/icon-dev.svg"}
            alt="front end dev image"
          />
        </div>
        <h3>Skills</h3>
        <p className={styles.descreption}>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <span className={styles.title}>Languages and framworks:</span>
        <p>Next JS, Node JS, Scss, PureCss, c++ </p>
      </div>
    </section>
  );
};
export default Collumns;
