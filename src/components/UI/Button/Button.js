import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClick, btnType, children }) => (
  <button
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
