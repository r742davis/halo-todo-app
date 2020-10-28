import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import Todo from "../Todo/Todo";
import Title from "../Title/Title";
import InfoPanel from "../InfoPanel/InfoPanel";
import Spinner from "../UI/Spinner/Spinner";

import { connect } from "react-redux";

const todoDashboard = (props) => {
  let todoList = <Spinner />;
  let infoPanel = null;

  if (!props.loading) {
    const test =
      props.filteredTodos &&
      props.filteredTodos.filter((filteredTodo) =>
        props.todos.filter((todo) => filteredTodo.id === todo.id)
      );

    console.log(test);

    props.filteredTodos && !props.editingTodoList
      ? (todoList = test)
      : (todoList = props.todos);

    todoList = todoList.map((todo) => (
      <Todo
        key={todo.id}
        content={todo.content}
        todoCompleted={todo.isDone}
        editing={todo.editing}
        editedContent={props.editedContent}
        editingTodoList={props.editingTodoList}
        onUpdateTodo={() => props.onUpdateTodo(todo)}
        onDeleteTodo={() => props.onDeleteTodo(todo.id)}
        onEditTodo={() => props.onEditTodo(todo)}
        onInputChanged={props.onInputChanged}
        onSubmitEdit={(e) => props.onSubmitEdit(e, todo)}
      />
    ));
  }

  if (props.todos.length > 0) {
    infoPanel = (
      <InfoPanel
        todos={props.todos}
        filters={props.filters}
        activeFilter={props.activeFilter}
        onClearCompletedTodos={props.onClearCompletedTodos}
        onSelectFilterOption={props.onSelectFilterOption}
      />
    );
  }

  let todoInput = (
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
  );

  return (
    <main className="todo-dashboard">
      <Title classProp="todo-dashboard__title" titleText="todos" />
      <section className="todo-dashboard__section">
        {todoInput}
        {todoList}
        {infoPanel}
      </section>
    </main>
  );
};

const mapStateToProps = (state) => ({
  loading: state.todos.loading,
});

export default connect(mapStateToProps)(todoDashboard);
