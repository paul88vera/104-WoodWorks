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
    <section id="contact">
      <div className="contact-para">
      <h2 data-testid="con" className="contact-title">
        Contact 10-4
      </h2>
      <p>
        If you have questions or want more information about my builds,
        let me know down below. We will respond as soon as we are able.
      </p>
      </div>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        emailto="placeholder@email.com"
      >
        <div className="input-container">
          <label htmlFor="name"><strong>Name:</strong></label>
          <br/>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email"><strong>Email address:</strong></label>
          <br/>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="message"><strong>Message:</strong></label>
          <br/>
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
        <br/>
        <button data-testid="sub" type="submit" className="btn btn-blue">
          SUBMIT
        </button>
      </form>
    </section>
  );
}

