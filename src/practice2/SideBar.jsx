import React, { useState, useContext } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { context } from "../context";
export default (props) => {
  const ctx = useContext(context);
  return (
    <Menu
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      width={"100%"}
    >
      <Link onClick={ctx.toggleMenu} to="/">
        Home
      </Link>

      <Link onClick={ctx.toggleMenu} to="/menu">
        Menu
      </Link>
    </Menu>
  );
};
