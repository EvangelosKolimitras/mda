import React from "react";
import StylesSummary from "./assets/styles/Summary.module.scss";
import SummaryProps from './assets/ts/interfaces/Summary.interface'

const Summary: React.FC<SummaryProps> = (props) => {
  return (
    <div className={StylesSummary.Summary}>
      <div className={StylesSummary.Summary__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
    </div>
  );
};

export default Summary;
