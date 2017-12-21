import React from 'react';
import TaskTodo from './TaskTodo';

const TaskTable = (props) => {
  return(
    <div className="row">
        <TaskTodo tasks={props.tasks} />
      <div className="col-6">
        <div className="d-flex flex-column ">
          <div className="p-2">flex</div>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
