import React, { Component } from 'react';
import InputBudget from '../../components/Budget/InputBudget';
import BudgetTable from '../../components/Budget/BudgetTable';

class Budget extends Component {
  render() {
    return(
      <div>
        <InputBudget />
        <BudgetTable />
      </div>
    );
  }
}


export default Budget;
