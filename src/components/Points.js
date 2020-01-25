import React from "react";

const Points = ({ onHandlePoints }) => (
  <button
    className="btn btn-primary points"
    name="points"
    onClick={onHandlePoints}
  >
    Points
  </button>
);

export default Points;
