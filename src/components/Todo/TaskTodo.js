import React from 'react';

const TaskTodo = (props) => {
  return(
    <div className="col-6 lead bg-danger">
      {props.tasks.map((task, id) =>
        <div key={id} className="p-2">{task}</div>
      )}
    </div>
  );
};

export default TaskTodo;
