import React from 'react'
import Task from './task/Parent'

const Modes = () => {
  return (
    <>
    <div className='w d-flex border border-secondary rounded mt-4'>
        <div className='task m-3'>
            <a href='./tasks' className='link'>
              <p className='badge bg-danger p-3 fs-3 text-start'>Add<br/>Tasks</p>
              </a>
        </div>
        <div className='task m-3'>
            <a href='#' className='link'>
              <p className='badge bg-primary p-3 fs-3 text-start'>Add<br/>Notes</p>
              </a>
        </div>
        <div className='container  d-flex '>
        <div className='task m-3'>
            <a href='#' className='link'>
              <p className='badge bg-danger p-3 fs-3 text-start'>Add<br/>Photos</p>
              </a>
        </div>
        <div className='task m-3'>
            <a href='#' className='link'>
              <p className='badge bg-secondary p-3 fs-3 text-starts'>Add<br/>Other</p>
              </a>
        </div>
    </div>
    </div>
    <div className='d-flex justify-content-center mt-3'>
      <p className='h3 text-danger'>Happy Tasking!👋</p>
    </div>
    </>
  )
}

export default Modes