import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store/actions/index";

import TaskDashboard from "../../components/TasksDashboard/TasksDashboard";

class Tasks extends React.Component {
  state = {
    task: {
      value: "",
      completed: false,
      valid: false,
    },
    tasks: [
      {
        title: "Get Milk",
        completed: false,
        touched: false,
      },
      {
        title: "Walk the Dog",
        completed: false,
        touched: false,
      },
    ],
    taskInput: "",
  };

  inputChangedHandler = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  taskSubmitHandler = (e, task) => {
    e.preventDefault();
    console.log(task);
    const newTask = {
      title: this.state.taskInput,
      completed: false,
      touched: false,
    };

    const updatedTasks = [newTask, ...this.state.tasks];

    this.setState({
      tasks: updatedTasks,
      taskInput: "",
    });
  };

  render() {
    return (
      <TaskDashboard
        tasks={this.state.tasks}
        taskInput={this.state.taskInput}
        inputChangedHandler={this.inputChangedHandler}
        onSubmitTask={(e) => this.taskSubmitHandler(e, this.state.taskInput)}
      />
    );
  }
}

const mapDispatchToProps = { addTask };
const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
