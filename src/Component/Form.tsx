import React, { useState } from "react";
import { CopyPlus } from "lucide-react";
import "./../Styles/Form.css";
import axios from "axios";

const Form=()=> {

  const [title,setTitle]=useState((''))
  const handlerTitle=(e:any)=>{
    setTitle(e.target.value)
  }

  const authtoken = window.localStorage.getItem("jwt");

  const addingTodo=async()=>{
    try {
      const res = await axios({
        method: "POST",
        url: "https://todo-app-backend-88ss.onrender.com/api/todos",
        data: {
          title
        },
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      })
      console.log(res);
      window.location.reload();
  }catch (e) {
    console.log(e);
    
  }}


  return (
    <div>
      <div className="form">
        <input type="text" onChange={handlerTitle}/>
        <button className="new-task-btn" value={title} onClick={addingTodo}>
          <CopyPlus /> New Task
        </button>
      </div>
    </div>
  );
}
export default Form;
