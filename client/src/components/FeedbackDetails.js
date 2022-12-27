import React from "react";
import { useParams } from "react-router-dom";

function FeedbackDetails() {
  // const params = useParams();
  // const feedbackId = params.feedbackId;

  const { feedbackId } = useParams();
  return <div>FeedbackDetails {feedbackId}</div>;
}

export default FeedbackDetails;
