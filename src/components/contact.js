import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/contact.scss";
import { motion } from "framer-motion";
import useComponentVisibility from "../hooks/useComponentVisibility";

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    disabled: true,
    emailSent: null,
  });

  const isContactComponentVisible = useComponentVisibility("contact");

  // form validation
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const nameField = document.querySelector("#name");
    const emailField = document.querySelector("#email");
    const messageField = document.querySelector("#message");

    const isValidName = nameField.checkValidity();
    const isValidEmail = emailField.checkValidity();
    const isValidMessage = messageField.checkValidity();

    let isSendButtonDisabled = true;

    if (isValidName && isValidEmail && isValidMessage) {
      isSendButtonDisabled = false;
    }

    setContactForm({
      ...contactForm,
      [name]: value,
      disabled: isSendButtonDisabled,
    });

    //form validity
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3030/api/email", contactForm)
      .then((res) => {
        setContactForm({
          name: "",
          email: "",
          message: "",
          disabled: true,
          emailSent: true,
        });
      })
      .catch((err) => {
        setContactForm({ ...contactForm, disabled: false, emailSent: false });
      });
  };

  const variants = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: "80%" },
  };

  console.log(contactForm);

  return (
    <>
      <div id="contact"></div>
      <motion.div
        className="contact"
        animate={isContactComponentVisible ? "show" : "hide"}
        initial="hide"
        variants={variants}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="contact-title">Contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactForm.name}
            onChange={handleChange}
            placeholder="Name"
          ></input>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactForm.email}
            onChange={handleChange}
            placeholder="Email"
          ></input>
          <label htmlFor="message"></label>
          <textarea
            className="contact-form-textArea"
            type="text"
            rows="3"
            id="message"
            name="message"
            placeholder="Message..."
            form="usrform"
            value={contactForm.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="contact-form-button"
            type="submit"
            disabled={contactForm.disabled}
          >
            Send
          </button>

          {contactForm.emailSent === true && (
            <p className="contact-form-successMessage">Email sent!</p>
          )}
          {contactForm.emailSent === false && (
            <p className="contact-form-errorMessage">Email not sent!</p>
          )}
        </form>
      </motion.div>
    </>
  );
}

export default Contact;
