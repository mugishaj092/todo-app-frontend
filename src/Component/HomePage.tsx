import React from "react";
import Form from "./form";
import "./../Styles/HomePage.css";
import Task from "./Task";
function HomePage() {
  return (
    <div className="homepage">
      <div className="homeTask">
        <Form />
        <Task />
      </div>
    </div>
  );
}

export default HomePage;
