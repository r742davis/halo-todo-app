import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const taskInput = (props) => (
  <form className="task-input" onSubmit={props.onSubmitTask}>
    <FontAwesomeIcon className="task-input__icon" icon={faChevronDown} />
    <input
      className="task-input__input"
      type={props.type}
      name={props.name}
      value={props.taskInput}
      placeholder={props.placeholder}
      onChange={(e) => props.onInputChanged(e)}
    />
  </form>
);

export default taskInput;
