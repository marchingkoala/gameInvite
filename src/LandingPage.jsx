import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-frame">
        <img
          src={`${import.meta.env.BASE_URL}img/invite_letter.jpg`}
          alt="Your invitation letter"
          className="landing-letter"
        />

        <button
          className="rsvp-button rsvp-button--yes"
          onClick={() => navigate("/rsvp", { state: { rsvp: "yes" } })}
        >
          Yes I will be there
        </button>

        <button
          className="rsvp-button rsvp-button--no"
          onClick={() => navigate("/rsvp", { state: { rsvp: "no" } })}
        >
          Sorry, can't make it
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
