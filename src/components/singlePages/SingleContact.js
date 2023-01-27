import { React, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "../../styles/singlePageStyles/SingleContact.module.css";
import mailPic from "../../imgs/mail.png";
import { Fragment } from "react";

const Result = () => {
  return <p>Your message has been sent! Thank you!</p>;
};

export default function SingleContact() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u1407ib",
        "template_276x9k6",
        e.target,
        "X8FCH5L3FBSX1Gpo9"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <Fragment>
      <section className={classes.ContactMeSection}>
        <div className={classes.leftSide}>
          <img src={mailPic} alt="Send me a message!"></img>
          <h2>Send me a message!</h2>
        </div>
        <form className={classes.ContactForm} onSubmit={sendEmail}>
          <h1>Let's talk!</h1>
          <input
            type="text"
            placeholder="First Name"
            name="name"
            required
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
          ></input>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
          ></input>
          <textarea
            name="message"
            rows={3}
            required
            placeholder="Your message..."
          />
          <input
            type="submit"
            value="SEND MESSAGE"
            className={classes.sendBtn}
          ></input>
          <div className={classes.messageSent}>
            {result ? <Result /> : null}
          </div>
        </form>
      </section>
    </Fragment>
  );
}
