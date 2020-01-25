import React from "react";

const Name = ({ onHandleName }) => (
  <button className="btn btn-primary name" name="name" onClick={onHandleName}>
    Name
  </button>
);

export default Name;
