import React from "react";
import Checkbox from "../UI/Icons/Checkbox/Checkbox";
import DeleteIcon from "../UI/Icons/DeleteIcon/DeleteIcon";

const todo = (props) => {
  let textDisplay = (
    <form onSubmit={props.onSubmitEdit}>
      <input
        className={props.editing ? "todo__edit" : "todo__title"}
        name={props.editing ? "editedContent" : props.content}
        value={props.editing ? props.editedTitle : props.content}
        onChange={props.onInputChanged}
        onClick={!props.editing ? props.onEditTodo : null}
      />
    </form>
  );

  return (
    <section
      className={!props.editing && props.editingTodoList ? "todo--disabled" : "todo"}
    >
      <Checkbox
        classProp="todo__checkbox"
        checked={props.todoCompleted}
        clicked={props.onUpdateTodo}
        changed={props.onInputChanged}
        disabled={!props.editing && props.editingTodoList}
      />
      {textDisplay}
      <DeleteIcon classProp="todo__icon" clicked={props.onDeleteTodo} />
    </section>
  );
};

export default todo;
