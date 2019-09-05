import React from "react";
import { Link } from "react-router-dom";

const RenderCoinData = props => {
  return (
    <Link to={`/${props.id}`}>
      <h1>{props.name}</h1>
    </Link>
  );
};

export default RenderCoinData;
