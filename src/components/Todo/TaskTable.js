import React from 'react';

const TaskTable = (props) => {
  return(
    <div className="row">
      <div className="col lead">
        {props.tasks.map((task, id) =>
          <div key={id} className="p-2 task">
            {task}
            <span
              className="float-right delete-task">
                &times;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskTable;
