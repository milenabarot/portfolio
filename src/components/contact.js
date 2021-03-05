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
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contactForm.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="message">Message</label>
        <textarea
          className="contact-textArea"
          type="text"
          rows="3"
          id="message"
          name="message"
          placeholder="..."
          form="usrform"
          value={contactForm.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" disabled={contactForm.disabled}>
          Send
        </button>

        {contactForm.emailSent === true && (
          <p className="contact-successMessage">Email sent!</p>
        )}
        {contactForm.emailSent === false && (
          <p className="contact-errorMessage">Email not sent!</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
