import React, { useState } from "react";

export default function StateCounter() {
const[count, setCount] = useState(0);

const handleClick = () => {
    setCount(count + 1);
    console.log(count + " - with state");
}

return (
    <div>
        <h3>With State</h3>
      <label>{count}</label>
      <hr/>
      <label>Counter</label>
      <button onClick = {handleClick}>{count}</button>
    </div>
  );
}