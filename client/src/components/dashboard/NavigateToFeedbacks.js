import React from "react";
import { Link } from "react-router-dom";
import fileIcon from "../../images/file-icon.png";

function NavigateToFeedbacks() {
  return (
    <Link to="/feedbacks">
      <img src={fileIcon} alt="file" />
    </Link>
  );
}

export default NavigateToFeedbacks;
