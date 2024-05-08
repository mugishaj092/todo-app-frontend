import React, { useEffect, useState } from "react";
import { BadgeXIcon, NotebookPen } from "lucide-react";
import "../Styles/taskbar.css";
import PendingLabel from "./pendingLabel";
import UpdateModal from "./UpdateModal";
import axios from "axios";

interface Task {
  dueDate: string;
  completed: boolean;
  _id: string;
  title: string;
  createdBy: string;
  __v: number;
}

function Task() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modal, setModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    const authtoken = window.localStorage.getItem("jwt");
    axios({
      method: "GET",
      url: "https://todo-app-backend-88ss.onrender.com/api/todos",
      headers: {
        Authorization: `Bearer ${authtoken}`,
      },
    })
      .then((response) => {
        setTasks(response.data.data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  const toggleTaskStatus = async (id: string, completed: boolean) => {
    const authtoken = window.localStorage.getItem("jwt");
    try {
      const res = await axios({
        method: "PATCH",
        url: `https://todo-app-backend-88ss.onrender.com/api/todos/${id}`,
        data: { completed: completed === true ? false : true },
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      });
      console.log(res);
      axios({
        method: "GET",
        url: "https://todo-app-backend-88ss.onrender.com/api/todos",
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      })
        .then((response) => {
          console.log(response.data.data.todos);
          setTasks(response.data.data.todos);
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
        });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTaskStatus = async (id: string) => {
    const authtoken = window.localStorage.getItem("jwt");
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://todo-app-backend-88ss.onrender.com/api/todos/${id}`,
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      });
      console.log(res);
      axios({
        method: "GET",
        url: "https://todo-app-backend-88ss.onrender.com/api/todos",
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      })
        .then((response) => {
          console.log(response.data.data.todos);
          setTasks(response.data.data.todos);
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
        });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleModal = (task: Task) => {
    setSelectedTask(task);
    setModal(!modal);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task._id}
          className="task-item"
        >
          <div className="content" onClick={() => toggleTaskStatus(task._id, task.completed)}>
            <PendingLabel status={task.completed} />
            <div>{task.title}</div>
          </div>
          <div className="action">
            <div className="edit" onClick={() => toggleModal(task)}>
              <NotebookPen className="edit-icon" />
            </div>
            <div className="delete" onClick={()=>deleteTaskStatus(task._id)}>
              <BadgeXIcon className="delete-icon" />
            </div>
          </div>
        </div>
      ))}
      {modal && (
        <UpdateModal toggleModalFun={toggleModal} task={selectedTask!} />
      )}
    </div>
  );
}

export default Task;
