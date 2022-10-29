import styles from "../styles/Cards.module.css";
const Cards = () => {
  const websites = [
    {
      title: "Chat Room",
      des: "Chat rooms website built with next js and socket io with firebase/mongoDb database.",
      link: "https://gouderhicham-chat.herokuapp.com/?room=3",
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
      icon: "sms.png",
    },
  ];
  return (
    <section className={`${styles.cards_grid} projects`}>
      {websites.map((website, i) => {
        return (
          <div className={styles.card} key={i}>
            <div className={styles.title}>
              <img src={website.icon} alt="website icon" />
              <h2>{website.title}</h2>
            </div>
            <p>{website.des}</p>
            <a href={website.link} target="_blank" className={styles.go_to}>
              <img src="/link.png" alt="link image" />
              <p>visit website</p>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
