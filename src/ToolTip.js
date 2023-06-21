import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToolTip from "./ToolTip.js";


ReactDOM.render(
  <div className="abc">
    <ToolTip text="Left" placement={"left"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Left
      </div>
    </ToolTip>
    <ToolTip text="Right" placement={"right"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Right
      </div>
    </ToolTip>
    <ToolTip text="Top" placement={"top"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Top
      </div>
    </ToolTip>
    <ToolTip text="Bottom" placement={"bottom"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Bottom
      </div>
    </ToolTip>
  </div>,
  document.getElementById("root")
);

export default ToolTip