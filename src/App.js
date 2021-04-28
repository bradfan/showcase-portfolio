import React, { Component } from "react";
import projects from "./projects.json";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Section from "./Section";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Section></Section>
        {this.state.projects.map((project) => (
          <Card
            props={project}
          />
        ))}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
