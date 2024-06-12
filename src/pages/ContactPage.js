import React from 'react';
import Footer from '../components/Footer';
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
      <Footer />
    </div>
  );
};

export default ContactPage;
