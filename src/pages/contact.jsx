import React, { useState } from "react";
import "../styles/contact.css";
import confetti from "canvas-confetti";

export default function Contact() {
  const [error, setError] = useState("");
  const [confettiTriggered, setConfettiTriggered] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = [];
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name) {
      newErrors.push("name");
    }
    if (!email) {
      newErrors.push("email");
    } else if (!validateEmail(email)) {
      newErrors.push("valid email");
    }
    if (!message) {
      newErrors.push("message");
    }

    if (newErrors.length > 0) {
      let errorMessage = "Please fill out the ";
      if (newErrors.length === 1) {
        errorMessage += `${newErrors[0]}.`;
      } else if (newErrors.length === 2) {
        errorMessage += `${newErrors[0]} and ${newErrors[1]}.`;
      } else {
        errorMessage += `${newErrors.slice(0, -1).join(", ")}, and ${newErrors[newErrors.length - 1]}.`;
      }
      setError(errorMessage);
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() && !confettiTriggered) {
      const button = event.target.querySelector('button[type="submit"]');
      const rect = button.getBoundingClientRect();
      const confettiOrigin = {
        x: (rect.left + rect.right) / 2 / window.innerWidth,
        y: (rect.top + rect.bottom) / 2 / window.innerHeight,
      };

      confetti({
        particleCount: 100,
        spread: 70,
        origin: confettiOrigin,
      });

      setConfettiTriggered(true);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="EX. John Doe" />

        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email" placeholder="EX. johndoe@email.com" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Enter your message here... "></textarea>

        <div className="mobile">
          <button type="submit">Submit</button>
        

        <span id="err" className="error-message">
          {error}
        </span>
        </div>
      </form>
    </div>
  );
}
