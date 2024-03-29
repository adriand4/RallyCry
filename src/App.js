import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";
import Messages from "./Messages";
import "./App.css";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Feed");

  const handleSidebarOptionClick = (option) => {
    setSelectedComponent(option);
  };
  return (
    // BEM
    <div className="app">
      <Sidebar onOptionClick={handleSidebarOptionClick} />

      {selectedComponent === "Feed" && <Feed />}
      {selectedComponent === "Messages" && <Messages />}
      {selectedComponent === "Profile" && <Profile />}

    </div>
  );
}

export default App;