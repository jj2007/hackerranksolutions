import React from "react";

class Articles extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.articles.map((v, i) => (
            <tr data-testid="article" key={i}>
              <td data-testid="article-title">{v.title}</td>
              <td data-testid="article-upvotes">{v.upvotes}</td>
              <td data-testid="article-date">{v.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Articles;
