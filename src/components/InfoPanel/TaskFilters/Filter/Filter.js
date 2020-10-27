import React from "react";

const filter = (props) => (
  <button
    className={["task-filters__filter", props.classes].join(' ')}
    type={props.type}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default filter;
