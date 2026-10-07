import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "./emailConfig";
import "./App.css";

function RsvpPage({ name, setName }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isAttending = location.state?.rsvp !== "no";
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleRsvp = async () => {
    const fullName = name.trim();

    if (!fullName) {
      setError("You must enter your full name.");
      return;
    }

    setError("");
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subject: `${fullName} has rsvp'ed`,
          message: `${fullName} has confirmed to join the game.`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
    } catch (err) {
      console.error("EmailJS send failed:", err);
    }

    setSending(false);
    navigate("/invite");
  };

  return (
    <div
      className="rsvp-container"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/invite_answer.jpeg)`,
      }}
    >
      <div className="rsvp-content">
        {isAttending ? (
          <>
            <p className="rsvp-text">
              We are glad you will be joining us. Please enter your full name
            </p>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rsvp-input"
            />
            {error && <p className="rsvp-error">{error}</p>}
            <button
              onClick={handleRsvp}
              className="rsvp-submit-button"
              disabled={sending}
            >
              {sending ? "Sending..." : "RSVP"}
            </button>
          </>
        ) : (
          <p className="rsvp-text">What a shame. Perhaps next time.</p>
        )}
      </div>
    </div>
  );
}

export default RsvpPage;
