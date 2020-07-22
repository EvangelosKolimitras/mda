import * as React from "react";
import StylesFigure from "./assets/styles/Figure.module.scss";
import FigureProps from './assets/ts/interfaces/Figure.interface'

const Figure: React.FC<FigureProps> = (props) => {
  return (
    <div className={StylesFigure.Figure}>
      <div className={StylesFigure.Figure__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
    </div>
  );
};

export default Figure;
