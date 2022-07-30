import React from "react";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import './sidebar.scss'

function SideBar() {
  return (
    <div className="sidebar-container">
      <GitHub className="icon" />
      <LinkedIn className="icon" />
      <Twitter className="icon" />
    </div>
  );
}

export default SideBar;
