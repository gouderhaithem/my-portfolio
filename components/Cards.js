import styles from "../styles/Cards.module.css";
import Image from "next/image";
const Cards = () => {
  const websites = [
    {
      title: "Chat Room",
      des: "Chat rooms website built with next js and socket io with firebase/mongoDb database.",
      link: "https://gouder-chat.vercel.app/?room=sandwich+%F0%9F%8C%AD",
      icon: "/chat-room.png",
    },
    {
      title: "Mini Fb",
      des: "A next js website where you can post , like , edit stuff and other people can see it.",
      link: "https://gouderhicham-fb.vercel.app/",
      icon: "/social-media.png",
    },
    {
      title: "Crypto Info / News",
      des: "A react app that shows latest states and news for each individual crypto currency ",
      link: "https://gouderhicham-crypto.netlify.app/",
      icon: "/crypto.png",
    },
    {
      title: "React Travel App",
      des: "If you want to see hotels and restaurants based on a certain area, this app is for you",
      link: "https://gouderhicham-gps.netlify.app/#close",
      icon: "/gps.png",
    },
    {
      title: "Send Me Sms",
      des: "By filling the input field and submitting the form a new sms with be sent to me!",
      link: "https://gouderhicham-sms.vercel.app/",
      icon: "/sms.png",
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
