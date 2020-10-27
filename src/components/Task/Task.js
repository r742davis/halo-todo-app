import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const task = (props) => (
  <section className="task">
    <input className="task__checkbox" type="checkbox"/>
    <h2 className="task__title">{props.children}</h2>
  </section>
);

export default task;
