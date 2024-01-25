import React from "react";

export default function NoStateCounter() {
  let count = 0;
  const setCount = () => {
  count++;
  console.log(count + " - without s");
   }
  return (
    <div>
        <h3>Without State</h3>
      <label>{count}</label>
      <hr/>
      <label>Counter</label>
      <button onClick = {setCount}>{count}</button>
    </div>
  );
}