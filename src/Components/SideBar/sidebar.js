import React from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import './sidebar.scss'

function SideBar() {
  return (
    <div className="sidebar-container">
      <a className= "icon-link" href={"https://github.com/leoarthurwall"} target="_blank" rel="noopener noreferrer">
        <GitHub className="icon" />
      </a>
      <a className= "icon-link" href={"https://www.linkedin.com/in/leo-wall/"} target="_blank" rel="noopener noreferrer">
        <LinkedIn className="icon" />
      </a>
    </div>
  );
}

export default SideBar;
