import React from "react";
import { CopyPlus } from "lucide-react";
import './../Styles/Form.css'

function Form() {
  return (
    <div>
      <div className="form">
        <input type="text" />
        <button className="new-task-btn">
          <CopyPlus /> New Task
        </button>
      </div>
    </div>
  );
}

export default Form;
