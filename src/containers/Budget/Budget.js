import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../../actions/index.js';
import InputBudget from './InputBudget';
import BudgetTable from '../../components/Budget/BudgetTable';

class Budget extends Component{
    render() {
      let totalInc = 0;
      if(this.props.income.length > 0) {
        this.props.income.map(inc => {
          totalInc += parseInt(inc.val);
        });
      }

      let totalExp = 0;
      if(this.props.expense.length > 0) {
        this.props.expense.map(exp => {
          totalExp += parseInt(exp.val);
        })
      }

      const budget = totalInc - totalExp;

      const incomes = this.props.income.map((inc, id) => {
        return(
          <div key={id} className="row p-2">
            <div className="col-6">{inc.note}</div>
            <div className="col-6 text-right">+ {inc.val}</div>
          </div>
        );
      });

      const expenses = this.props.expense.map((exp, id) => {
        return(
          <div key={id} className="row p-2">
            <div className="col-6">{exp.note}</div>
            <div className="col-6 text-right">- {exp.val}</div>
          </div>
        );
      });



      return(
        <div>
          <InputBudget />
          <BudgetTable
            totalInc={totalInc}
            totalExp={totalExp}
            budget={budget}
            incomes={incomes}
            expenses={expenses}
           />
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    income: state.income,
    expense: state.expense
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
