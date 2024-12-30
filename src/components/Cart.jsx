/* eslint-disable no-restricted-globals */
import React from "react";

const Cart = ({ tasks, deleteTask, updateTask, editTask }) => {
  // console.log(tasks);

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      deleteTask(id);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <ul className="list-group w-75 mt-3">
            <div
              className={
                task.complete
                  ? "list-group-item shadow-sm mb-2 bg-secondary text-white text-decoration-line-through"
                  : "list-group-item shadow-sm mb-2"
              }
            >
              <div className="row">
                <div className="col-10">
                  <input
                    type="checkbox"
                    defaultChecked={task.complete}
                    onClick={() => updateTask(task.id, !task.complete)}
                    className="me-3"
                  />
                  {task.task}
                  <i
                    onClick={() => editTask(task.id, task.task, task.complete)}
                    className="fas fa-edit text-primary float-end"
                  ></i>
                </div>
                <div className="col-2">
                  <i
                    className="fas fa-xmark float-end mt-1"
                    onClick={() => handleDelete(task.id)}
                  ></i>
                </div>
              </div>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cart;
