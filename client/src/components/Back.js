import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default Back;
