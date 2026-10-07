import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Entrance() {
  const navigate = useNavigate();

  return (
    <div className="entrance-container">
      <img
        src={`${import.meta.env.BASE_URL}img/invite_envelope.png`}
        alt="An envelope containing your invitation — click to open"
        className="entrance-envelope"
        onClick={() => navigate("/landing")}
      />
    </div>
  );
}

export default Entrance;
