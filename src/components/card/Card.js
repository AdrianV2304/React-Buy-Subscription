import React from "react";
import Button from "../button";
import "../../logos/ice_logo.png";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__wrap">
        <img
          className="card__wrap--logo"
          src={`${props.logo}`}
          alt="brand logo"
        />

        <span className="card__wrap--subscription">{props.subscription}</span>

        <span className="card__wrap--details">{props.details}</span>

        <div className="card__wrap--cost">
          <span className="card__wrap--value">{props.value}</span>
          <span className="card__wrap--period">{props.period}</span>
        </div>

        <Button content="Add subscription" />
      </div>

      <div className={props.background}></div>
    </div>
  );
};

export default Card;
