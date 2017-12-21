import React, { Component } from 'react';
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
        <TaskTable tasks={this.props.tasks} />
      </div>
    );
  }
}


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
