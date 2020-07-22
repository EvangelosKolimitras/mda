import React from "react";
import StylesTime from "./assets/styles/Time.module.scss";
import TimeProps from './assets/ts/interfaces/Time.interface'

const Time: React.FC<TimeProps> = (props) => {
  return (
    <div className={StylesTime.Time}>
      <div className={StylesTime.Time__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
    </div>
  );
};

export default Time;
