import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
import XoGame from "./components/xo";
import Clock from "./components/Clock";
import RockPaperScissors from "./components/RPS/index";

function App() {
  const [activeTab, setActiveTab] = useState([
    { id: 1, label: "X / O game", isActive: true, component: <XoGame /> }, // iminja na app shto kje gi pravite
    { id: 2, label: "Clock", isActive: true, component: <Clock /> },
    {
      id: 3,
      label: "Rock Paper Scissors",
      isActive: false,
      component: <RockPaperScissors />
    }
  ]);

  const handleActiveTab = (id) => {
    let copy = [...activeTab];
    copy[activeTab.findIndex((item) => item.isActive)].isActive = false;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    setActiveTab(copy);
  };

  return (
    <div>
      <Navigation activeTab={activeTab} handleActiveTab={handleActiveTab} />
      <div>{activeTab.find((item) => item.isActive).component}</div>
      <Footer />
    </div>
  );
}

export default App;
