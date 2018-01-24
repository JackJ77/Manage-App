import React from 'react';

const BudgetTable = (props) => {
  return(
    <div className="row mx-auto">
      <div className="col-12 lead p-2">
        <div className="row">
          <div className="col-6">Budget:</div>
          <div className="col-6 text-right">{props.budget}</div>
        </div>
      </div>
      <div className="col-6 bg-success lead p-2">
        <div className="row">
          <div className="col-6">INCOME:</div>
          <div className="col-6 text-right">{props.totalInc}</div>
        </div>
      </div>
      <div className="col-6 bg-danger lead p-2">
        <div className="row">
          <div className="col-6">EXPENSES:</div>
          <div className="col-6 text-right">{props.totalExp}</div>
        </div>
      </div>
      <div className="d-flex flex-column col-6">
          {props.incomes}
      </div>
      <div className="d-flex flex-column col-6">
          {props.expenses}
      </div>
    </div>
  );
};

export default BudgetTable;
