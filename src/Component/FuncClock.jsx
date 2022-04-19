import React, { useState } from "react";
import "./clock.css";

function FuncClock (){
  const [date, setDate] = useState(new Date());

  function tick(){
    setDate(new Date());
  }

  setInterval(() => {
    tick();
  }, 1000);

  return (
    <div className="clock">
      <h1>Realtime Clock Function component</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default FuncClock;