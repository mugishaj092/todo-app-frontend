import React from "react";
import "../Styles/SideBar.css";
import { Outlet } from "react-router-dom";
import profile from "../Assets/profile.JPG";
import { ListFilter,CopyPlus } from "lucide-react";
import CompletedLabel from "./CompletedLabel";
import PendingLabel from "./pendingLabel";
import AllLabel from "./AllLabel";



function SideBar() {
  interface user{
    name:string|number
    imgSrc:string
  }
  
  let userProfile: user = {
    name: "Walmond",
    imgSrc: profile,
  };
  return (
    <div className="layout">
      <div className="container">
        <div className="sidebar">
          <div className="top">
            <div className="Allprofile">
              <img
                src={userProfile.imgSrc}
                width={46}
                alt=""
                className="profile"
              />
              <div className="profileName">
                <span>Do-it</span>
                <span>{userProfile.name}</span>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="title">
              <ListFilter />
              <div className="filterr">Filter</div>
            </div>
            <div className="items">
            <div className="item"><AllLabel />All</div>
              <div className="item"><CompletedLabel />Completed</div>
              <div className="item"><PendingLabel /> Pending</div>
            </div>
          </div>
          <button className="new-task-btn"><CopyPlus /> New Task</button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
