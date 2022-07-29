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
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
  <li
    className={activeTab === "tab1" ? "active" : ""}
    onClick={handleTab1}
  >
    Design
  </li>
  <li
    className={activeTab === "tab2" ? "active" : ""}
    onClick={handleTab2}
  >
    Develop
  </li>
</ul>
      <div className="outlet">
          {activeTab === "tab1" ? <DesignTab /> : <DevelopmentTab />}
    
      </div>
    </div>
  );
};
export default Tab;