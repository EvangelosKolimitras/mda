import React from "react";
import StylesSection from "./assets/styles/Section.module.scss";
import SectionProps from './assets/ts/interfaces/Section.interface'

const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className={StylesSection.Section}>
      <div className={StylesSection.Section__title}>
        <h1>{props.title}</h1>
        <small>{props.description}</small>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Section;
