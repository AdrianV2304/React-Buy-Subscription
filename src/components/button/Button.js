import React from "react";

const Button = (props) => {
  return (
    <button className={`button ${props.inverted}`}>{props.content}</button>
  );
};

export default Button;
