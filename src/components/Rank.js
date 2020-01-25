import React from "react";

const Rank = ({ onHandleRank }) => (
  <button className="btn btn-primary rank" name="rank" onClick={onHandleRank}>
    Rank
  </button>
);

export default Rank;
