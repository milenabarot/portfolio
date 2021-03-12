import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/contact.scss";

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3030/api/email", contactForm)
      .then((res) => {
        setContactForm({ ...contactForm, disabled: false, emailSent: true });
      })
      .catch((err) => {
        setContactForm({ ...contactForm, disabled: false, emailSent: false });
      });
  };

  console.log(contactForm);

  return (
    <div className="contact" id="contact">
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
    </div>
  );
}

export default Contact;
