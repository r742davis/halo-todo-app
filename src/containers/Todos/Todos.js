import React from "react";
import { connect } from "react-redux";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  setTodoEditState,
  updateTodoList,
} from "../../store/actions/index";
import TodoDashboard from "../../components/TodoDashboard/TodoDashboard";

class Todos extends React.Component {
  state = {
    todoInput: "",
    editedContent: "",
    editingTodoList: false,
    itemsLeft: 0,
    filters: ["All", "Active", "Completed"],
    filteredTodos: null,
    checkboxBoolean: true,
    checkbox: ''
  };

  inputChangedHandler = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      content: this.state.todoInput,
      isDone: false,
    };
    this.props.addTodo(newTodo);
  };

  editTodoHandler = (todo) => {
    console.log(todo.content, todo.id);
    if (todo.editing === false) {
      this.setState(
        {
          editedContent: todo.content,
          editingTodoList: true,
        },
        () => this.props.setTodoEditState(todo)
      );
    }
  };

  submitEditHandler = (e, todo) => {
    e.preventDefault();
    const newContent = this.state.editedContent;
    const updatedTodo = { ...todo, content: newContent, editing: false };
    this.setState(
      {
        editingTodoList: false,
      },
      () => this.props.updateTodo(updatedTodo)
    );
  };

  updateTodoHandler = (todo) => {
    let updatedTodo = null;
    if (todo.isDone) {
      updatedTodo = { ...todo, isDone: false };
    } else {
      updatedTodo = { ...todo, isDone: true };
    }
    this.props.updateTodo(updatedTodo);
  };

  clearCompletedTodos = () => {
    const filteredTodos = this.props.todos.filter(
      (todo) => todo.isDone === true
    );
    filteredTodos.forEach(todo => this.props.deleteTodo(todo.id))
  };

  deleteTodoHandler = (id) => {
    this.props.deleteTodo(id);
  };

  selectFilterOptionHandler = (filter) => {
    let filteredTodos = [];
    switch (filter) {
      case "All":
        this.setState({
          filteredTodos: null,
        });
        break;

      case "Active":
        filteredTodos = this.props.todos.filter(
          (todo) => todo.isDone === false
        );
        this.setState({
          filteredTodos: filteredTodos,
        });
        break;
      case "Completed":
        filteredTodos = this.props.todos.filter((todo) => todo.isDone === true);
        this.setState({
          filteredTodos: filteredTodos,
        });
        break;
      default:
        return;
    }
  };

  toggleAllCheckboxesHandler = () => {
    const todos = [...this.props.todos];
    const checkboxBoolean = this.state.checkboxBoolean;

    const updatedTodos = todos.map((todo) =>
      todo.isDone === (checkboxBoolean === true ? true : false)
        ? { ...todo, isDone: checkboxBoolean === true ? false : true }
        : todo
    );

    this.setState({
      checkboxBoolean: !this.state.checkboxBoolean,
    });

    this.props.updateTodoList(updatedTodos);
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <TodoDashboard
        todos={this.props.todos}
        todoInput={this.state.todoInput}
        editedContent={this.state.editedContent}
        editingTodoList={this.state.editingTodoList}
        filters={this.state.filters}
        filteredTodos={this.state.filteredTodos}
        onAddTodo={(e) => this.addTodoHandler(e, this.state.todoInput)}
        onClearCompletedTodos={this.clearCompletedTodos}
        onUpdateTodo={this.updateTodoHandler}
        onDeleteTodo={this.deleteTodoHandler}
        onEditTodo={this.editTodoHandler}
        onInputChanged={this.inputChangedHandler}
        onToggleAllCheckboxes={this.toggleAllCheckboxesHandler}
        onSelectFilterOption={this.selectFilterOptionHandler}
        onSubmitEdit={this.submitEditHandler}
      />
    );
  }
}

const mapDispatchToProps = {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  setTodoEditState,
  updateTodoList,
};
const mapStateToProps = (state) => ({
  todos: state.todos.todoList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
