import styles from "../styles/Collumns.module.css";
const Collumns = () => {
  return (
    <section className={styles.grid_main}>
      <div className={styles.grid_col}>
        <div className={`${styles.grid_img} align-center`}>
          <img src={"/stacks.svg"} />
        </div>

        <h3>Frontend Developer</h3>
        <p className={styles.descreption}>
          I genuinely care about people, and love helping fellow designers work
          on their craft.
        </p>
        <span className={styles.title}>Languages I speak:</span>
        <p>UX/UI, Product design, Freelancing</p>
      </div>
      <div className={styles.grid_col}>
        <div className={`${styles.grid_img} align-center`}>
          <img src={"/icon-dev.svg"} />
        </div>
        <h3>Mentor</h3>
        <p className={styles.descreption}>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <span className={styles.title}>Experiences I draw from:</span>
        <p>HTML, Pug, Slim, CSS, Sass, Git</p>
      </div>
    </section>
  );
};
export default Collumns;
