import React, { Component } from 'react';

class InputTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onTaskSubmit = this.onTaskSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onTaskSubmit(event) {
        event.preventDefault();

        this.props.addTask(this.state.term);
        this.setState({ term: '' });
    }

  render() {
    return (
      <div className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          type="text"
          className="form-control" />
        <span className="input-group-btn">
          <button
            onClick={this.onTaskSubmit}
            className="btn btn-success"
            type="button">
            Add Task
          </button>
        </span>
      </div>
    );
  }
}


export default InputTask;
