import React, { Component } from "react";
class FrontPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <button
            className="btn btn-primary m-4"
            onClick={() => this.props.onAllMatch(this.props.view)}
          >
            All Matche
          </button>
          <button
            className="btn btn-primary m-4"
            onClick={() => this.props.onPointTable(this.props.view)}
          >
            Point Table
          </button>
          <button
            className="btn btn-primary m-4"
            onClick={() => this.props.onNewMatch(this.props.view)}
          >
            New Matche
          </button>
        </div>
      </div>
    );
  }
}

export default FrontPage;
