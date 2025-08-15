import React, { useState, useMemo, useCallback } from "react";
import ReactDOM from "react-dom/client";

// useMemo hook example
// 1: Counter button: increase/decrease
// 2: Input field: Fibonacci number
// Fibonacci sequence: 0 1 1 2 3 5 8 13 21 34
// Recursive code: Time complexity O(2^n)

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  // Recursive Fibonacci using useCallback
  const fibonacci = useCallback((n)=>{
    if(n<=1) 
     return n;

    return fibonacci(n-1)+fibonacci(n-2);
  }
  ,[]);

  // Memoized result so it only recalculates when `number` changes
  const result = useMemo(() => fibonacci(number),[number]);

  return (
    <>
      <h1>Counter is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <div>
        <h2>Fibonacci number is: {result}</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
