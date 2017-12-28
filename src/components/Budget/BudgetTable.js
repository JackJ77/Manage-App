import React from 'react';

const BudgetTable = (props) => {
  return(
    <div className="row mx-auto">
      <div className="col-12 lead p-2">
        <div className="row">
          <div className="col-6">Budget:</div>
          <div className="col-6 text-right">+ 5277</div>
        </div>
      </div>
      <div className="col-6 bg-success lead p-2">
        <div className="row">
          <div className="col-6">INCOME:</div>
          <div className="col-6 text-right">+ 7277</div>
        </div>
      </div>
      <div className="col-6 bg-danger lead p-2">
        <div className="row">
          <div className="col-6">EXPENSES:</div>
          <div className="col-6 text-right">- 2000</div>
        </div>
      </div>
      <div className="d-flex flex-column col-6">
          <div className="row p-2">
            <div className="col-6">Salary</div>
            <div className="col-6 text-right">+ 5077</div>
          </div>
          <div className="row p-2">
            <div className="col-6">Online Shop</div>
            <div className="col-6 text-right">+ 2200</div>
          </div>
      </div>
      <div className="d-flex flex-column col-6">
        <div className="row p-2">
          <div className="col-6">Laptop</div>
          <div className="col-6 text-right">- 2000</div>
        </div>
      </div>
    </div>
  );
}

export default BudgetTable;
