import React from "react";
import RenderCoinData from "./RenderCoinData.jsx";

const Coin = (props) => {
  console.log("COIN: ", props.coinData)
//coin info should render through this
  return (
    <div>
      {props.coinData.map(i => (
        // console.log("Finally an id?", i.id)
        <RenderCoinData 
          key={i.id}
          imgUrl={i.image}
          circulating_supply={i.circulating_supply}
          name={i.name}
          price_change_24h={i.price_change_24h}
          price_change_percentage_24h={i.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default Coin;
