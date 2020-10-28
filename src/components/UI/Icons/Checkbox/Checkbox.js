import React from "react";

const checkbox = ({ classProp, checked, clicked, changed, disabled }) => (
  <input
    className={classProp}
    type="checkbox"
    name="checkbox"
    checked={checked}
    onClick={clicked}
    onChange={changed}
    disabled={disabled}
  />
);

export default checkbox;
