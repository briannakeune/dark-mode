import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import Coin from "./components/Coin.jsx";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data)
        // console.log("API CALL", res)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Coin coinData={coinData} />

      <Route
        exact
        path="/"
        render={props => <Charts {...props} coinData={coinData} />}
      />
      <Route
        //this route is suppose to be able to lead people to more info on each type of cryptocurrency
        path="/:id"
        //I'm assuming I also need props here...but only if I change the state for this id here. 
        render={props => <Coin {...props} coinData={coinData} />}
      />
      <Route path="/about" component={About} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
