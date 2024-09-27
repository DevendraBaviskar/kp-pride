import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Background2 from "../../Images/Background2.jpg";
import "./Contact.css";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email.trim("").length === 0) {
      setLoading(false);
      return toast.error("Required Email");
    }
    emailjs
      .sendForm("service_pdz6pym", "template_2m5ufui", form.current, {
        publicKey: "h4YIXZLGhUjTIgdn_",
      })
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          toast.success(
            "Booking Done, You will be get Confirmed message on Email, THANK YOU!"
          );
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="contact"
      style={{
        backgroundImage: `url(${Background2})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="form-container">
        <div className="form-heading">
          <h2>Booking Form</h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label className="form-label">Name</label>
          <input type="text" name="from_name" className="form-input" />
          <label className="form-label">Email</label>
          <input
            type="email"
            name="from_email"
            className="form-input "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label">
            Enter Room Type & CheckIN Date/Time
          </label>
          <textarea name="message" className="form-textarea" />
          <input type="submit" value="Send" className="form-button" />
        </form>
      </div>
      <div className="contact-hotel_name">
        <span className="heading">Important Message!</span>
        <li className="contact-li">
          We will confirm your booking within 12 hours.
        </li>
        <li className="contact-li">
          It is mandatory to have Room type, number of Person (if there is a
          child), checkIN Date and Time in the Message box.
        </li>
        <li className="contact-li">
          We do not take advanced payment from customers at the time of Booking.
        </li>
        <li className="contact-li">
          We will send you booking confirmation via mail
        </li>
      </div>
      <div className="contact-loading">
        <span>{loading ? "Booking in Process..." : ""}</span>
      </div>
    </div>
  );
};

export default Contact;
