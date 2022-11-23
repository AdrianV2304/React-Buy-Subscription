import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`button ${props.inverted}`}>
      {props.content}
    </button>
  );
};

export default Button;
