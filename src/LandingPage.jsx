import React from "react";
import "./App.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <img
        src={`${import.meta.env.BASE_URL}img/invite_letter.jpg`}
        alt="Your invitation letter"
        className="landing-letter"
      />
    </div>
  );
}

export default LandingPage;
