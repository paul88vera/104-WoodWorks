import React, { useState, setFormState } from "react";
import { validateEmail } from "../utils/helpers";
// import emailjs from "emailjs-com";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
        // alert("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }

      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      // emailjs
      //   .sendForm("service_i3y68e3", "template_81ojwa7", e.target, 'KNv5JFb9L05OTducq')
      //   .then(function (response) {
      //     alert(
      //       "Thank you for the email! I will respond as soon as I can!",
      //       response.status,
      //       response.text
      //     );
      //     window.location.reload();
      //   }),
      //   function (error) {
      //     console.log("FAILED...", error);
      //   };
    }
  }

  return (
    <section className="contact">
      <h2 data-testid="con" className="title">
        Contact Me
      </h2>
      <p>
        If you have questions or want more information about any of my projects,
        let me know down below.
      </p>
      <br />
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        emailto="paul88vera@gmail.com"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button data-testid="sub" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
  );
}

