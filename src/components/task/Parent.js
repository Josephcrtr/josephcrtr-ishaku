import React, { useState } from 'react'
import { Last } from 'react-bootstrap/esm/PageItem'
import Task from './form'
import List from './List'

const Parent = () => {
  const [task, setTask] = useState('')
  const [result, setResult] = useState([])
  const pluck = result.map(a=> a.id)
  const text = result.map(a=>a.msg)
  const addTodo=(todo)=>{
   setResult([...result,{id:Math.floor(Math.random()*10000),msg: todo}])
  console.log(pluck,text)
  }
  return (
    <div>
        <Task task={task} setTask={setTask} result={result} setResult={setResult} addTodo={addTodo}/>
        {result.map((r)=>{
          <div key={pluck}>
            {r}
          </div>
        })}
    </div>
  )
}

export default Parent