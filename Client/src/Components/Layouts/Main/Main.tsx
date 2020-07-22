import React from "react";
import StylesMain from "./assets/styles/Main.module.scss";
import MainProps from './assets/ts/interfaces/Main.interface'
import Form from '../../Elements/Form/form';

const Main: React.FC<MainProps> = (props) => {
  return (
    <main className={StylesMain.Main}>
      <div className={StylesMain.Main__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
      {props.children}
      <Form  description={"this is a form"} title={"login"}/>
    </main>
  );
};

export default Main;
