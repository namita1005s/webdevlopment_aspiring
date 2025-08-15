import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./container/header";
import Body from "./container/body";

function GithubProfile(){
// Header
// Body: 10 card show karenge

  return (
   <>
      <Header></Header>
      <Body></Body>
   </>
  )

   

}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);