import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import Todo from "../Todo/Todo";
import Title from "../Title/Title";
import InfoPanel from "../InfoPanel/InfoPanel";
import Spinner from "../UI/Spinner/Spinner";

import { connect } from "react-redux";

const todoDashboard = (props) => {
  let todoList = <Spinner />;

  if (!props.loading) {
    props.filteredTodos
      ? (todoList = props.filteredTodos)
      : (todoList = props.todos);

    todoList = todoList.map((todo) => (
      <Todo
        key={todo.id}
        content={todo.content}
        todoCompleted={todo.isDone}
        editing={todo.editing}
        editingTodoList={props.editingTodoList}
        editedTitle={props.editedTitle}
        onUpdateTodo={() => props.onUpdateTodo(todo)}
        onDeleteTodo={() => props.onDeleteTodo(todo.id)}
        onEditTodo={() => props.onEditTodo(todo)}
        onInputChanged={props.onInputChanged}
        onSubmitEdit={(e) => props.onSubmitEdit(e, todo)}
      />
    ));
  }
  

  return (
    <main className="task-dashboard">
      <Title titleText="todos" />
      <TodoInput
        type="text"
        name="todoInput"
        placeholder="What needs to be done?"
        editingTodoList={props.editingTodoList}
        todoInput={props.todoInput}
        onAddTodo={props.onAddTodo}
        onInputChanged={props.onInputChanged}
        onToggleAllCheckboxes={props.onToggleAllCheckboxes}
      />
      {todoList}
      <InfoPanel
        todos={props.todos}
        filters={props.filters}
        onClearCompletedTodos={props.onClearCompletedTodos}
        onSelectFilterOption={props.onSelectFilterOption}
      />
    </main>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  todos: state.todos.todoList,
  loading: state.todos.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(todoDashboard);
