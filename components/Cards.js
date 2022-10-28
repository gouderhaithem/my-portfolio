import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Cards.module.css";
const Cards = () => {
  let urls = [
    "https://gouderhicham-fb.vercel.app/",
    "https://gouderhicham-crypto.netlify.app/",
    "https://gouderhicham-gps.netlify.app/",
    "https://gouderhicham-chat.herokuapp.com/?room=3",

    "https://gouderhicham-sms.vercel.app/",
  ];
  return (
    <section className={styles.cards_grid}>
      {urls.map((url, i) => {
        const [image, setimage] = useState(null);
        get_url(url, setimage);
        return (
          <div key={i} className={"image-container"}>
            {image && (
              <Image
                width={500}
                height={350}
                src={image}
                layout="fill"
                className={"image"}
                loading="lazy"
                alt="website image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Cards;

async function get_url(url, setimage) {
  await fetch(
    `https://api.savepage.io/v1/?key=96d39481fc5e144daf42d4b3d03fccee&q=${url}`
  ).then((res) => setimage(res.url));
}
