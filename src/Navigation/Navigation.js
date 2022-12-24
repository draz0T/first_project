import React from "react";
import Clock from "../components/Clock";
import "./navigation.css";
function Navigation({ activeTab, handleActiveTab }) {
  return (
    <div className="navigation-bar">
      {activeTab.map((item) => {
        return (
          <div
            className="nav-item"
            key={item.id}
            onClick={() => handleActiveTab(item.id)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
