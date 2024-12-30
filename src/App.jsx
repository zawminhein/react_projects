import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { api } from "./api/apiResource";
import uuid from "react-uuid";
// import "../node_modules/@fortawesome/react-fontawesome"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [tasks, setTasks] = useState([]);

  const dataFetching = async () => {
    const res = await api.get("/todolist");
    // .then(res => res.json())
    // .catch(err => console.log(err.message))

    // console.log(res.data);

    setTasks(res.data);

    // console.log(tasks);
  };

  useEffect(() => {
    dataFetching();
  }, [tasks]);

  // post data to api
  const addItem = async (userInput) => {
    // console.log(userInput);
    const data = {
      id: uuid(),
      task: userInput,
      complete: false,
    };

    await api.post("/todolist", data);
  };

  const deleteTask = async (id) => {
    await api.delete(`/todolist/${id}`);
  };

  const updateTask = async (id, complete) => {
    await api.patch(`/todolist/${id}`, { complete });
  };

  const editTask = async (id, task, complete, userInput) => {
    // const editData = {
    //   id: id,
    //   task: userInput,
    //   complete: complete,
    // };
    // console.log(id, task, complete);

    console.log(task);
    
    

    // await api.patch(`/todolist/${id}`, editData);
  };

  return (
    <div className="App">
      <div className="mx-auto w-50 mt-4">
        <h1 className="h3 mb-3 ms-5 p-3">React Todo Lists</h1>
        <Form addItem={addItem} editTask={editTask}/>
        <List
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
