import styles from "../styles/Contact_Page.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const contact = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [disabled, setdisabled] = useState(true);
  async function sendSms(e) {
    if (text === "") {
      alert("type something to send message !");
    }
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: text.name,
        email: text.email,
        message: text.message,
      }),
    };
    e.preventDefault();
    setdisabled(true);
    toast.promise(
      fetch("api/email", options)
        .then((res) => res.json())
        .then(async (res) => {
          console.log(res.message);
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve(res.message);
              setdisabled(false);
              setText({
                name: "",
                email: "",
                message: "",
              });
            }, 4000);
          });
        })
        .catch((err) => console.log(err)),
      {
        loading: "Sending message ...",
        success: "Message Sent !",
        error: "Error when fetching data :(",
      }
    );
  }
  useEffect(() => {
    if (text.message !== "" && text.email !== "" && text.name !== "") {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [text.email, text.message, text.name]);
  return (
    <>
      <Toaster />
      <div className={styles.image}>
        <img src="/my-avatar.svg" />
      </div>
      <main className={styles.container}>
        <h1>Thanks for taking the time to reach out.</h1>
        <form onSubmit={sendSms} className={styles.form}>
          <div className={styles.name_email}>
            <div>
              <p>Name</p>
              <input
                onChange={(e) => {
                  setText((old) => ({ ...old, name: e.target.value }));
                }}
                value={text.name}
                required
                type="text"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                value={text.email}
                onChange={(e) => {
                  setText((old) => ({ ...old, email: e.target.value }));
                }}
                required
                type={"email"}
              />
            </div>
          </div>
          <div className={styles.text_area}>
            <p>Message</p>
            <textarea
              value={text.message}
              onChange={(e) => {
                setText((old) => ({ ...old, message: e.target.value }));
              }}
              required
            />
          </div>
          <div className={styles.button}>
            <button
              disabled={disabled}
              className={`${disabled ? "fill" : ""}`}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default contact;
