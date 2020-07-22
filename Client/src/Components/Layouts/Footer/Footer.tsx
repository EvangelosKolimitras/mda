import React from "react";
import StylesFooter from "./assets/styles/Footer.module.scss";
import FooterProps from './assets/ts/interfaces/Footer.interface'

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className={StylesFooter.Footer}>
      <div className={StylesFooter.Footer__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
    </div>
  );
};

export default Footer;
