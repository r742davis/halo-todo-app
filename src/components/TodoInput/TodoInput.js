import React from "react";
import DownChevron from "../UI/Icons/DownChevron/DownChevron";

const todoInput = (props) => (
  <form className="todo-input" onSubmit={props.onAddTodo}>
    <DownChevron
      classProp="todo-input__icon"
      clicked={props.onToggleAllCheckboxes}
    />
    <input
      className="todo-input__input"
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
