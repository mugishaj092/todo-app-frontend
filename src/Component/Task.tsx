import React, { useState } from "react";
import { BadgeXIcon, NotebookPen } from "lucide-react";
import "../Styles/taskbar.css";
import PendingLabel from "./pendingLabel";
import UpdateModal from "./UpdateModal";

function Task() {
  const [tasks, setTasks] = useState([
    { id: 1, label: "To Study", status: "pending" },
    { id: 2, label: "Working on Backend", status: "completed" },
    { id: 3, label: "To Study", status: "pending" },
    { id: 4, label: "To Study", status: "pending" },
  ]);
  const toggleTaskStatus = (id:any) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };
  const [modal, setModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // State to hold selected task
  const toggleModal = (task:any) => {
    setSelectedTask(task); // Set the selected task when modal is toggled
    setModal(!modal);
  };
console.log(selectedTask);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-item" onClick={() => toggleTaskStatus(task.id)}>
          <div className="content">
            <PendingLabel status={`${task.status}`} />
            <div>{task.label}</div>
          </div>
          <div className="action">
            <div className="edit" onClick={() => toggleModal(task)}>
              <NotebookPen className="edit-icon" />
            </div>
            <div className="delete">
              <BadgeXIcon className="delete-icon" />
            </div>
          </div>
        </div>
      ))}
      <div>
        {modal && <UpdateModal toggleModalFun={toggleModal} task={selectedTask} />}
      </div>
    </div>
  );
}

export default Task;
