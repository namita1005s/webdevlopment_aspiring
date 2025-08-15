import React, { useState , useEffect, use } from "react";
function Colorful() {
    const [color, setColor] = useState("linear-gradient(135deg, #ff1b6b, #45caff)");
      // useEffect is a hook that lets you perform side effects in function components (last m chalega)
      useEffect(() => {
        
      // Update body background color whenever state changes
      document.body.style.background = color;
      //  rendering the component
      //  using the useState hook to manage the background color
      }, [color]); // dependency array, it will run when color changes 
      // if you pass an empty array, it will run only all the time
      // if you pass a variable, it will run when that variable changes
      // if you pass one or more variables, it will run when any of those variables change
    
      return (
        <>
          <h1>Background Color Changer</h1>
          <div className="but">
            <button style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button> 
            <button style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
            <button style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
            <button style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
            <button style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
            <button style={{ backgroundColor: "purple", }} onClick={() => setColor("purple")}>Purple</button>
            <button style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
            <button style={{ backgroundColor: "teal", }} onClick={() => setColor("teal")}>Teal</button>
            <button style={{ backgroundColor: "brown",}} onClick={() => setColor("brown")}>Brown</button>
            <button style={{ backgroundColor: "gray", }} onClick={() => setColor("gray")}>Gray</button>
            <button className="reset" style={{ background: "linear-gradient(135deg, #ff1b6b, #45caff)"}} onClick={() => setColor("linear-gradient(135deg, #ff1b6b, #45caff)")}> Reset </button>
          </div>
        </>
      );
  
}
// export default Colorful;

// useEffect  laga do jab bhi dom manipulate karna ho taki parents ki galti children m na ho
export default React.memo(Colorful);
// React.memo is used to prevent unnecessary re-renders of the component and  when its props change it will let the change happen
// seedhi bhasha m humara dusra function render yani call na ho jab tak jaroori na ho
// parent bahut jada change ho tabhi memo use karo