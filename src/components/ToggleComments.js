import React from "react";

function ToggleComments({ onToggleHandle, toggleText }) {
  return (
    <div className="ToggleBtn">
      <button onClick={onToggleHandle}>{toggleText}</button>
    </div>
  );
}

export default ToggleComments;
