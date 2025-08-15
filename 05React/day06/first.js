import "react";
import React , {useState} from "react";
import ReactDOM from "react-dom/client";
// useState is a Hook that lets you add React state to function components (special function)
function Counter() {
  let [count, setCount] = React.useState(0);


  function incrementnumber() {
    // count = count + 1;
    setCount(count+1);
    // console.log(count);
    // document.querySelector('h1').innerText = `Counter: ${count}`; // this is allowed but not recommended
  }
  function decrementnumber() {
    // count = count - 1;
    setCount(count-1)
    // console.log(count);
    // document.querySelector('h1').innerText = `Counter: ${count}`; // by this way we are manipulating the DOM directly, which is not recommended in React
  }

  return (
    <div className="first">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white", marginBottom: "30px" }}>Counter: {count}</h1>
        <button onClick={incrementnumber} style={{ marginRight: "20px" }}>
          Increment{count}
        </button>
        <button onClick={decrementnumber}>Decrement{count}</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
  