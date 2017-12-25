import React from 'react';
import { Link } from 'react-router';

const InputBudget = (props) => {
  return(
    <div className="input-group">
        <select className="form-control col-2">
          <option>+</option>
          <option>-</option>
        </select>
      <input type="number" className="form-control" />
      <span className="input-group-btn">
        <button type="button" className="btn btn-success">Add Amount</button>
      </span>
    </div>
  );
};

export default InputBudget;
