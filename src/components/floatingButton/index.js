import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function FloatingButton() {
  return (
    <div id="float-button">
      <Link to="/filterRoom">
        <div id="button-new-meet">
          <img src="https://i.imgur.com/kJUAAPS.png"  alt="Nova Reunião" id="newMeetImg"/>
        </div>
      </Link>
    </div>
  );
}

export default FloatingButton;