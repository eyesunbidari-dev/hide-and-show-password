import React, { useState } from "react";
import "./App.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function App() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handelClick = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };
  return (
    <div className="wrapper">
      <div className="input-fields">
        <input type={type} />
        <span onClick={handelClick}>
          <Icon icon={icon} size={25} />
        </span>
      </div>
    </div>
  );
}

export default App;
