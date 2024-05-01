import React from 'react'
import './../Styles/UpdateModal.css'
import { X } from 'lucide-react'
import UpdateForm from './Updateform'

function UpdateModal(props:any) {
    const task=props.task.label
    console.log(task);
    
  return (
    <div className='modal'>
        <div className='modal-header'>
            <span>Update Task</span>
            <div onClick={props.toggleModalFun}><X /></div>
        </div>
        <div>
            <UpdateForm tasks={task}/>
        </div>
    </div>
  )
}

export default UpdateModal
