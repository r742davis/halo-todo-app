import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const deleteIcon = ({ classProp, clicked}) => (
  <FontAwesomeIcon
    className={classProp}
    icon={faTimes}
    onClick={clicked}
  />
);

export default deleteIcon;
