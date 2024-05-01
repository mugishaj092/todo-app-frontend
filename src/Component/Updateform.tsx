import React, { useState } from "react";
import {  NotebookPen } from "lucide-react";
import "./../Styles/Form.css";

function UpdateForm(props:any) {
  
  const [content,setContent]=useState(props.tasks)
  const handlerForm=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setContent(e.target.value);
  }
  return (
    <div>
      <div className="form">
        <input className="value" type="text" onChange={handlerForm} value={content}/>
        <button className="new-task-btn update-btn">
          <NotebookPen className="edit-icon" /> Save
        </button>
      </div>
    </div>
  );
}

export default UpdateForm;
