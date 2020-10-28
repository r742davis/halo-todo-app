import React from "react";
import DownChevron from "../UI/Icons/DownChevron/DownChevron";

const todoInput = (props) => (
  <form className="task-input" onSubmit={props.onAddTodo}>
    <DownChevron
      classProp="task-input__icon"
      clicked={props.onToggleAllCheckboxes}
    />
    <input
      className="task-input__input"
      type={props.type}
      name={props.name}
      value={props.todoInput}
      placeholder={
        props.editingTodoList ? "Press Enter to Save Edit" : props.placeholder
      }
      onChange={props.onInputChanged}
      disabled={props.editingTodoList}
    />
  </form>
);

export default todoInput;
