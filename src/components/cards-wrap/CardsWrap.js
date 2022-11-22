import React from "react";
import Card from "../card";
import Description from "../description";
import Title from "../title";
import Button from "../button";

const CardsWrap = () => {
  return (
    <div className="wrap">
      <Title title="Get the most out of your mobile with the right subscription" />

      <Description description="All devices come with free delivery or pickup as standard. See information on available shopping options for your location." />

      <div className="wrap__cards">
        <Card
          background="yellow"
          logo="/ice_logo.png"
          subscription="Ice Mobile 10GB"
          details="Up to 100Mbit/s"
          value="299,-"
          period="/month"
        />

        <Card
          background="pink"
          logo="/telia_logo.png"
          subscription="Telia Mobil 15GB"
          details="Unlimited calls, SMS and MMS"
          value="953,-"
          period="/month"
        />

        <Card
          background="blue"
          logo="/telenor_logo.png"
          subscription="Telenor Next Fast"
          details="Up to 100Mbit/s"
          value="1028,-"
          period="/month"
        />
      </div>

      <Button content="See all subscriptions" inverted="inverted" />
    </div>
  );
};

export default CardsWrap;
