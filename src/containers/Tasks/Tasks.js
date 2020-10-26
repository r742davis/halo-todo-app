import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store/actions/index";
import Button from "../../components/UI/Button/Button";

class Tasks extends React.Component {
  render() {
    return (
      <>
      <h1 onClick={() => this.props.addTask()}>
        Hello I am the Task Container.
      </h1>
      <Button>Hello</Button>
      </>
    );
  }
}

const mapDispatchToProps = { addTask };
const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
