import React, { useState } from "react";
// import "./App.css"

export const News = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="">
      <h1>{value}</h1>

      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
    </div>
  );
};
