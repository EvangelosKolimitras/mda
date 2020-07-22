import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/__globals__";
import Article from "./Components/Layouts/Article/Article";
import Aside from "./Components/Layouts/Aside/Aside";
import Details from "./Components/Layouts/Details/Details";
import Figure from "./Components/Layouts/Figure/Figure";
import Footer from "./Components/Layouts/Footer/Footer";
import Header from "./Components/Layouts/Header/Header";
import Main from "./Components/Layouts/Main/Main";
import Nav from "./Components/Layouts/Nav/Nav";
import Section from "./Components/Layouts/Section/Section";
import Summary from "./Components/Layouts/Summary/Summary";
import Time from "./Components/Layouts/Time/Time";
import Home from "./Components/pages/Home/Home";
import { _id } from "./Utils/Utils";
import IndexProps from './assets/ts/interfaces/index.interfaces';
import axios from 'axios';
const Application = () => {

  const state = {
    el: [1,2],
  };


  useEffect( ()=>{
    async function getData() {
      const resp = await axios.get<IndexProps>("http://localhost:9999/api")
      const data = await resp.data.user
    }
    getData()
  },[] )

  const [elements, setElements] = useState(state.el);

  return (
    <Switch>
      <Route
        to="/"
        component={(props:any) => (
          <Home {...props}>
            <Header title="MDA" description="A header component">
              <Nav title="Nav" description="A nav component" />
            </Header>
            <Main title="Main" description="A main component">
              {elements.map((section) => {
                return (
                  <Section
                    key={section}
                    title={`Section ${section}`}
                    description={`An section component`}
                  >
                    <Time
                      title={`Time ${section}`}
                      description={`A Time component`}
                    />
                    <Figure
                      title={`Figure  ${section}`}
                      description={`A Figure component`}
                    />
                    <Details
                      title={`Details  ${section}`}
                      description={`A Details component`}
                    />
                    <Summary
                      title={`Summary  ${section}`}
                      description={`A Summary component`}
                    />
                  </Section>
                );
              })}
            </Main>
            <Aside title={`Aside`} description={`An Aside component`}>
              {elements.map((article) => (
                <Article
                  key={article}
                  title={`Article ${article}`}
                  description={`An ${article} component`}
                />
              ))}
            </Aside>
            <Footer title={`Footer`} description={`A Footer component`} />
          </Home>
        )}
      />
    </Switch>
  );
};

ReactDOM.render(
  <Router>
      <Application />
  </Router>,
  _id("App")
);

