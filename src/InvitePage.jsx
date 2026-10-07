import React, { useEffect } from "react";
import SecretPage from "./Secret";
import "./App.css";

function InvitePage({ name }) {
  const signifier = name.toLowerCase();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return signifier === "kathryn" ? (
    <SecretPage />
  ) : (
    <div
      className="rsvp-container"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/invite_answer.jpeg)`,
      }}
    >
      <div className="rsvp-content">
        <p className="rsvp-text">We are glad you can make it. See you soon</p>
      </div>
    </div>
  );
}

export default InvitePage;
