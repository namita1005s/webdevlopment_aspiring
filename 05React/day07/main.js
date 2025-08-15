
import React, { useState , useEffect, use } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/component/colorful";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
      <h1>Counter is: {count}</h1>
      
      <button className="counters" onClick={() => setCount(count + 1)}>Increment</button>
       </div>
      <Colorful ></Colorful>
     

    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
// two times render but third time it will not render because primitive value is not changed
// 1st time: initial render , 2nd time: bellout 

