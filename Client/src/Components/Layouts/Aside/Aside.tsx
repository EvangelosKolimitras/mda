import React from "react";
import StylesAside from "./assets/styles/Aside.module.scss";
import AsideProps from './assets/ts/interfaces/Aside.interface'

const Aside: React.FC<AsideProps> = (props) => {
  return (
    <div className={StylesAside.Aside}>
      <div className={StylesAside.Aside__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
      {props.children}
    </div>
  );
};

export default Aside;
