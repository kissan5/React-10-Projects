import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [text, setText] = useState(" lets get connected fill this form");

  // const onViaCallSubmit = () => {
  //   console.log("I am from call");
  const onSubmit = (event) => {
    event.preventDefault();

    const newName = event.target[0].value;
    const newEmail = event.target[1].value;
    const newText = event.target[2].value;

    setName(newName);
    setEmail(newEmail);
    setText(newText);

    console.log("name", newName);
    console.log("email", newEmail);
    console.log("text", newText);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button
            // onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMessage fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mail">E-Mail</label>
            <input type="text" name="mail" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>
          <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Text: {text}</div>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
