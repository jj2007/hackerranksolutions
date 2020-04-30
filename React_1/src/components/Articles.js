import React from "react";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      article: [],
      hasMounted: false,
    };
  }
  handleType = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  // componentDidMount() {
  //   // For initial data
  //   this.setState({
  //     hasMounted: true,
  //   });
  // }

  handleClick = () => {
    this.setState({
      hasMounted: true,
    });
    fetch(
      `https://jsonmock.hackerrank.com/api/articles?author=${this.state.author}&page=1`
    )
      .then((data) => data.json())
      .then((articles) => {
        return this.setState({
          article: [...articles.data],
        });
      });
  };
  render() {
    console.log(this.state.article);
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>author:</span>
            <input
              onChange={this.handleType}
              type="text"
              className="text-input"
              data-testid="text-input"
            />
            <button
              onClick={this.handleClick}
              className="fetch-button"
              data-testid="fetch-button"
            >
              Fetch
            </button>
          </div>
        </div>
        {this.state.article.length > 0 ? (
          <div className="results">
            {this.state.article.map((t, k) => (
              <li key={k} data-testid="result-row">
                {t.title}
              </li>
            ))}
          </div>
        ) : (
          this.state.hasMounted && (
            <div data-testid="no-results">No results</div>
          )
        )}
      </React.Fragment>
    );
  }
}

export default Articles;
