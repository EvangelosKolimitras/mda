import React from "react";
import StylesHome from "./assets/styles/Home.module.scss";
import HomeProps from './assets/ts/interfaces/Home.interface'

const Home: React.FC<HomeProps> = (props) => {
  return <div className={StylesHome.Home}>{props.children}</div>;
};

export default Home;
