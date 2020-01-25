import React from "react";

const Age = ({ onHandleAge }) => (
  <button className="btn btn-primary age" name="age" onClick={onHandleAge}>
    Age
  </button>
);

export default Age;
