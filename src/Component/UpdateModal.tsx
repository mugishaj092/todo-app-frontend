import React, { useEffect, useState } from "react";
import "./../Styles/UpdateModal.css";
import { NotebookPen, X } from "lucide-react";
import axios from "axios";

function UpdateModal(props: any) {
  const [task, setTask] = useState(props.task.title);
  console.log(props.task._id);
  console.log(task);
  

  const updateTask = async () => {
    const authtoken = window.localStorage.getItem("jwt");
    try {
      const res=  await axios({
        method:"PATCH",
        url:`https://todo-app-backend-88ss.onrender.com/api/todos/${props.task._id}`,
        data:{ title:task },
          headers: {
            Authorization: `Bearer ${authtoken}`,
        }
    });
      window.location.reload();
      console.log(res);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handlerForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-header">
        <span>Update Task</span>
        <div onClick={props.toggleModalFun}>
          <X />
        </div>
      </div>
      <div>
        <div>
          <div className="form">
            <input
              className="value"
              type="text"
              onChange={handlerForm}
              value={task}
            />
            <button className="new-task-btn update-btn" onClick={updateTask}>
              <NotebookPen className="edit-icon" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
