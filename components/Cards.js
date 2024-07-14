import styles from "../styles/Cards.module.css";
import Image from "next/image";
const Cards = () => {
  const websites = [
    {
      title: "my blogger",
      des: "Blogger website using react js , express js and mysql for  express opinions and present the latest news",
      link: "https://gouderhaithem-blog.vercel.app/",
      icon: "/bloger.png",
    },
    {
      title: "my bloghub",
      des: "Blogger website using next js , FireBase for opinions and present the latest news",
      link: "https://mybloghub.vercel.app/",
      icon: "/logo30.png",
    },

    {
      title: "DZ Footy website",
      des: "A react js website where you can see the result,matches times and  players status any league or cup .",
      link: "https://gouderhaithem.github.io/dzfooty/",
      icon: "/dzfooty.png",
    },
    {
      title: "dropshipping using Shopify",
      des: " dropshipping website designed and created  by me ",
      link: "https://www.shopconsciouslycool.com",
      icon: "/shopify.png",
    },
    {
      title: "Arts Animation Website",
      des: "A react app that shows Simple responsive art website or portfolio with amazing animation ",
      link: "https://gouderhaithem.github.io/artswebsite/",
      icon: "/social-media.png",
    },
    {
      title: "React Music Player",
      des: "responsive app with dark mode option for listen certain music     ",
      link: "https://gouderhaithem.github.io/react-music-player/",
      icon: "/apple-music-icon.png",
    },
    {
      title: "Edulinka",
      des: "in home tutoring platforme created by nest js, react js, mongo db ,firebase ",
      link: "https://edulinka.vercel.app/",
      icon: "/edulinkalogo.png",
    },

    {
      title: "Mini Fb Website",
      des: "Mini fb like fb using next js , firebase ",
      link: "https://gouderhicham-fb.vercel.app/",
      icon: "/social-media.png",
    },
  ];
  return (
    <section className={`${styles.cards_grid} projects`}>
      {websites.map((website, i) => {
        return (
          <div
            data-aos="fade-left"
            data-aos-delay={`${i * 100}`}
            className={styles.card}
            key={i}
          >
            <div className={styles.title}>
              <Image
                src={website.icon}
                width={34}
                height={34}
                alt="website icon"
                loading="lazy"
              />
              <h2>{website.title}</h2>
            </div>
            <p>{website.des}</p>
            <a
              rel="noreferrer"
              href={website.link}
              target="_blank"
              className={styles.go_to}
            >
              <Image
                className={styles.img}
                src="/link.png"
                width={20}
                height={20}
                alt="link image"
                loading="lazy"
              />
              <p>visit website</p>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
