import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const downChevron = ({classProp, clicked}) => (
  <FontAwesomeIcon className={classProp} icon={faChevronDown} onClick={clicked} />
)

export default downChevron;