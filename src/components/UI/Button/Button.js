import React from "react";

const button = (props) => (
  <button
    className={props.classProp}
    type={props.type}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default button;
