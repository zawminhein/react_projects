import React from 'react'
import Cart from './Cart'
// import Form from './Form';

const List = ({tasks, deleteTask, updateTask, editTask}) => {

  // console.log(tasks);
  
  return (
    <div>
      {/* <Form/> */}
      
      <Cart tasks = {tasks} deleteTask={deleteTask} updateTask={updateTask} editTask={editTask}/>
   </div>
  )
}

export default List