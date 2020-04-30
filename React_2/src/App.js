import React, { Component } from "react";
import "./App.css";

import Articles from "./components/Articles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedarticles: this.props.articles,
    };
  }

  handleTop = () => {
    this.setState({
      sortedarticles: this.state.sortedarticles
        .sort((a, b) => {
          return a.upvotes - b.upvotes;
        })
        .reverse(),
    });
  };

  handleNew = () => {
    this.setState({
      sortedarticles: this.state.sortedarticles.sort((a, b) => {
        return b.date - a.date;
      }),
    });
  };
  render() {
    const { sortedarticles } = this.state;

    return (
      <div className="App">
        <div className="navigation">
          <button data-testid="top-link" onClick={this.handleTop}>
            Top
          </button>
          <button data-testid="newest-link" onClick={this.handleNew}>
            Newest
          </button>
        </div>
        <Articles articles={sortedarticles} />
      </div>
    );
  }
}

export default App;
