import React from 'react';

const TaskTable = (props) => {
  return(
      <div className="lead">
        {props.tasks.map((task, id) =>
          <div key={id} className="p-2 task">
            {task}
            <span
              onClick={() => { props.onClosing(id) }}
              className="float-right delete-task">
                &times;
            </span>
          </div>
        )}
      </div>
  );
};

export default TaskTable;
