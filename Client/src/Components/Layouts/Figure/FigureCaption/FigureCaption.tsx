import React from "react";

const FigureCaption = (props:any) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <small>{props.description}</small>
    </div>
  );
};

export default FigureCaption;
