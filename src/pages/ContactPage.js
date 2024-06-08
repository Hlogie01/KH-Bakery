import React from 'react';
import '../App.css'; // Make sure the path is correct

const ContactPage = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
