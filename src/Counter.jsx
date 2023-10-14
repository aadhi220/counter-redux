import React from "react";

export default function Counter() {
  return (
    <div className="counter-card">
      <div className="result-field">100</div>
      <div className="btn-collection">
        <button className="btn decrement ">Decrement</button>
        <button className="btn reset">reset</button>{" "}
        <button className="btn increment ">Increment</button>{" "}
      </div>
    </div>
  );
}
