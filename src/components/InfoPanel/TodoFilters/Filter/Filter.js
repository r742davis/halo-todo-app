import React from "react";
import Button from "../../../UI/Button/Button";

const filter = (props) => (
  <Button
    classProp={props.classProp}
    type={props.type}
    clicked={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </Button>
);

export default filter;
