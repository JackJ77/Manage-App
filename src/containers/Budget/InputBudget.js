import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../../actions/index.js';

class InputBudget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: '+',
      description: '',
      value: ''
    };

    this.handleSignChange = this.handleSignChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSignChange(event) {
    this.setState({sign: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }
  handleValueChange(event) {
    this.setState({value: event.target.value});
  }
  handleClick() {
    if(this.state.sign === '+') {
      this.props.actions.addIncome(this.state.description, this.state.value);
    } else {
      this.props.actions.addExpense(this.state.description, this.state.value);
    }
    this.setState({description: '',
                    value: ''});
  }

  render() {
    return(
      <div className="input-group">
          <select value={this.state.sign} onChange={this.handleSignChange} className="form-control col-1">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        <input value={this.state.description} onChange={this.handleDescriptionChange} placeholder="description" type="text" className="form-control" />
        <input value={this.state.value} onChange={this.handleValueChange} placeholder="value" type="number" className="form-control" />
        <span className="input-group-btn">
          <button disabled={!this.state.description||!this.state.value} onClick={this.handleClick} type="button" className="btn btn-success">Add Value</button>
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(InputBudget);
