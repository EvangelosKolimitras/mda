import React from "react";
import StylesArticle from "./assets/styles/Article.module.scss";
import ArticleProps from './assets/ts/interfaces/Article.interface'

const Article: React.FC<ArticleProps> = (props) => {
  return (<div className={StylesArticle.Article}>
    <div className={StylesArticle.Article__title}>
      <h1>{props.title}</h1>
      <small>{props.description}</small>
    </div>
  </div>);
};

export default Article;
