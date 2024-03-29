import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon, onClick }) {
  return (
    <div className="sidebarOption" onClick={onClick}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
