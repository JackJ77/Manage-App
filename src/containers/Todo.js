import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/index.js';
import InputTask from './InputTask';
import TaskTable from '../components/Todo/taskTable';

class Todo extends Component {


  render() {
    return(
      <div>
        <InputTask addTask={this.props.actions.createTask} />
        <TaskTable
          onClosing={this.props.actions.deleteTask}
          tasks={this.props.tasks} />
      </div>
    );
  }
}

Todo.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
