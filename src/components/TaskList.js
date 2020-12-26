import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";



const TaskList = () => {

  const { tasks, removeTask, findItem, findCompletedItem } = useContext(TaskListContext);
  var todoList = tasks.map(
    (task) => {
     return (<li className="list-item"  key={task.id}>
       <span  onClick={() => findCompletedItem(task.id)} style={{width: '250px', cursor: 'pointer'}} >
          {task.isCompleted ? (
       <span style={{textDecoration: 'line-through'}}>{task.title} </span>
      ) : (
        <span>{task.title} </span>
      )}
      </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
     </li>)
    });



  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {todoList}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
