import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../images/back-icon.png";

function Back() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <img src={backIcon} alt="back" />
      </button>
    </div>
  );
}

export default Back;
