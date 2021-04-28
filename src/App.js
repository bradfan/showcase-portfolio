import React, { Component } from "react";
import projects from "./projects.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import NavTabs from "./components/NavTabs";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./Footer";

class App extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Router>
          <NavTabs />
          <Route exact path="/">
            {this.state.projects.map((project) => (
              <Card props={project} />
            ))}
          </Route>
          <Route exact path="/about" component={About} />
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
