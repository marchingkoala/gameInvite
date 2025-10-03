import React, { useState } from "react";

function InvitePage({name}){

const [showSherm, setShowSherm] = useState(false);

return (
    <div className="invite-container">
      <div className="invite-overlay" />
      <div className="invite-content">
        <h1 className="invite-title">Welcome {name},</h1>
        <h1 className="invite-title">You have arrived at the town of RavenWood Bluff</h1>
        <p className="invite-subtitle">Blood Sacrifice is required to enter the unit</p>
        <p className="invite-subtitle">(we also take drinks and snacks)</p>
        <p className="invite-text"><strong>Date:</strong> October 24, 2025</p>
        <p className="invite-text"><strong>Location: </strong> 297 Montgomery st, unit 3W</p>
        <h2 className="invite-cryptid" onClick={() => setShowSherm(!showSherm)} style={{ cursor: "pointer" }}>
           {showSherm ? "Click to pet away" :  "Say hello to our local Cryptid"}
        </h2>
        {showSherm && <img src="/img/theSherm.jpg" style={{marginTop: '20px', maxHeight: '600px', width: 'auto'}}/>}
      </div>
    </div>
  );

}

export default InvitePage;