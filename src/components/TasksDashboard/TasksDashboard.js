import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import Task from "../Task/Task";
import Title from "../../components/Title/Title";
import InfoPanel from "../InfoPanel/InfoPanel";

const taskDashboard = (props) => {
  let taskList = null;

  if (props.tasks) {
    taskList = props.tasks.map((task) => (
      <Task key={task.title}>{task.title}</Task>
    ));
  }

  return (
    <main className="task-dashboard">
      <Title titleText="todos" />
      <TaskInput
        type="text"
        name="taskInput"
        placeholder="What needs to be done?"
        taskInput={props.taskInput}
        onInputChanged={props.inputChangedHandler}
        onSubmitTask={props.onSubmitTask}
      />
      {taskList}
      <InfoPanel />
    </main>
  );
};

export default taskDashboard;
