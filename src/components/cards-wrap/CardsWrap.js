import React, { useEffect, useState } from "react";
import Card from "../card";
import Description from "../description";
import Title from "../title";
import Button from "../button";

const CardsWrap = () => {
  const [data, setData] = useState([]);
  const addServices = () => {
    setData([...data, "nuts"]);
  }

  console.log(data);

  useEffect( () => {
    console.log("thistrigger");
    setTimeout( ()=>{setData(["apple", "orange", "pear", "cherry"])}, 2500 );
  }, []);

  return (
    <div className="wrap">
      <Title title="Get the most out of your mobile with the right subscription" />
      
      <Description description="All devices come with free delivery or pickup as standard. See information on available shopping options for your location." />

      <div className="wrap__cards">
      {data.map(fruit => {
        console.log(fruit);
        return (<Card onClick={addServices}
          background="yellow"
          logo="/ice_logo.png"
          subscription={fruit}
          details="Up to 100Mbit/s"
          value="299,-"
          period="/month"
        />);
      })}
      </div>

      <Button content="See all subscriptions" inverted="inverted" />
    </div>
  );
};

export default CardsWrap;
