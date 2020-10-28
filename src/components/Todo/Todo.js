import React from "react";
import Checkbox from "../UI/Icons/Checkbox/Checkbox";
import DeleteIcon from "../UI/Icons/DeleteIcon/DeleteIcon";

const todo = (props) => {
  let strikeThroughStyle = {};
  if (props.todoCompleted) {
    strikeThroughStyle = {
      textDecoration: "line-through",
    };
  }

  let textDisplay = (
    <h2
      className={
        !props.editing && props.editingTodoList
          ? "todo__title--disabled"
          : "todo__title"
      }
      style={strikeThroughStyle}
      name={props.content}
      onClick={!props.editingTodoList ? props.onEditTodo : null}
    >
      {props.content}
    </h2>
  );

  if (props.editing) {
    textDisplay = (
      <form className="todo__form" onSubmit={props.onSubmitEdit}>
        <input
          className="todo__edit"
          name="editedContent"
          defaultValue={props.editedContent}
          onChange={props.onInputChanged}
        />
      </form>
    );
  }

  let deleteIcon = null;
  if (!props.editing) {
    deleteIcon = (
      <DeleteIcon classProp="todo__icon" clicked={props.onDeleteTodo} />
    );
  }

  let checkbox = (
    <Checkbox
      classProp="todo__checkbox"
      checked={props.todoCompleted}
      clicked={props.onUpdateTodo}
      changed={props.onInputChanged}
      disabled={!props.editing && props.editingTodoList}
    />
  );

  return (
    <section
      className={
        !props.editing && props.editingTodoList ? "todo--disabled" : "todo"
      }
    >
      {checkbox}
      {textDisplay}
      {deleteIcon}
    </section>
  );
};

export default todo;
