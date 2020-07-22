import React from "react";
import StyleNav from "./assets/styles/Nav.module.scss";
import NavProps from './assets/ts/interfaces/Nav.interface.js'

const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav className={StyleNav.Nav}>
      <h1>{props.title}</h1>
      <small>{props.description}</small>
    </nav>
  );
};

export default Nav;
