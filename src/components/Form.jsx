import React, { useState } from 'react'

const Form = ({addItem, editTask, tasks}) => {

  const [ userInput, setUserInput ] = useState('');
  
  const submitHandeling = () => {
    addItem(userInput);
    setUserInput('');
  } 

  // console.log(editTask);

  // const show = () => {
  //   console.log(tasks.task);
    
  // }
  

  return (
    <div className='row ms-4'>

      <div className="col">
        <input value={userInput} onChange={ e => setUserInput( e.target.value )} type="text" className="form-control" placeholder='Enter test...'/>
      </div>

      <div className="col">
        <button onClick={ () => submitHandeling() } className="btn btn-outline-primary">
          <i className="fas fa-plus"></i>
          Add</button>
      </div>

    </div>
  )
}

export default Form