import React from "react";
import StylesDetails from "./assets/styles/Details.module.scss";
import DetailsProps from './assets/ts/interfaces/Details.interface'

const Details: React.FC<DetailsProps> = (props) => {
  return (
    <div className={StylesDetails.Details}>
      <div className={StylesDetails.Details__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
    </div>
  );
};

export default Details;
