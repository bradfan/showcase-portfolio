import React, { Component } from "react";
import projects from "./projects.json";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Section from "./Section";

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
