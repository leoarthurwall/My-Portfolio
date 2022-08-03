import DevelopmentTab from "./DevelopmentTab";
import DesignTab from "./DesignTab";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <div className="tab-container">
      {/* Tab nav */}
      <div className="tab-box">
        <ul className="projects-nav">
          <li
            id="project-tab"
            className={activeTab === "tab1" ? "active-tab" : ""}
            onClick={handleTab1}
          >
            Design
          </li>
          <li
            id="project-tab"
            className={activeTab === "tab2" ? "active-tab" : ""}
            onClick={handleTab2}
          >
            Development
          </li>
        </ul>
      </div>

      <div className="outlet">
        {activeTab === "tab1" ? <DesignTab /> : <DevelopmentTab />}
      </div>
    </div>
  );
};
export default Tab;
