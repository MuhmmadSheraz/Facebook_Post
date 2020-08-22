import React, { useState } from "react";
const Test = () => {
  let [isClick, setIsClicked] = useState(true);
  let clicked = () => {
      
    if (isClick == true) {
        setIsClicked(false);
      console.log("ture ha");
    } else if (isClick == false) {
      console.log("false  ha");
      setIsClicked(true);
    }
    // console.log("clicked");
  };
  return <button onClick={clicked}>ClickMe..........</button>;
};
export default Test;
