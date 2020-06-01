import React from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./style.css";
import MenuPage from "./menuPage/menuPage";
import Basket from "./basket/Basket";
import SideBar from "./practice2/SideBar";
import HomePage from "./homePage/homePage";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/menu">
          <MenuPage />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
