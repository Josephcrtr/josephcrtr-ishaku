import React from 'react'
import '/home/joseph/Desktop/parental task/src/index.css'
import { useState } from 'react'


const Task = ({task,setTask,result,setResult,addTodo}) => {

const handleSubmit=e=>{
  e.preventDefault()
}
const handleChange=e=>{
  setTask(e.target.value)
}

const handleClick=()=>{
  console.log(task)
  console.log(result)
  addTodo(task)
  setTask('')
}


  return (
        <form onSubmit={handleSubmit}>
          <div className='input-group input-group-lg mt-3 d' style={{width:600,}}>
            <input type='text' className='form-control' placeholder='Tasks...'
            onChange={handleChange} value={task}/>
            <span className='input-group-text'><button className='btn btn-secondary' onClick={handleClick}>Add Task</button></span>
          </div>
        </form>
  )
}

export default Task