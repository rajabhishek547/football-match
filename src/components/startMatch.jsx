import React, { Component } from "react";
class StartMatch extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="col-12 text-center">Welcome to an exciting match</h2>
        <div className="row">
          <div className="col-4 h3 text-center">{this.props.team1}</div>
          <div className="col-4 h3 text-center">
            {this.props.team1Score}-{this.props.team2Score}
          </div>
          <div className="col-4 h3 text-center">{this.props.team2}</div>
        </div>
        <div className="row ">
          <div className="col-6 text-center">
            <button
              className="btn btn-warning m-2"
              onClick={() => this.props.handleScore1(this.props.team1Score)}
            >
              Goal Scored
            </button>
          </div>
          <div className="col-6 text-center">
            <button
              className="btn btn-warning m-2"
              onClick={() => this.props.handleScore2(this.props.team2Score)}
            >
              Goal Scored
            </button>
          </div>
        </div>
        <div className="col-12 text-center">
          <button
            className="btn btn-warning"
            onClick={() => this.props.handleMatchOver(this.props.team2Score)}
          >
            Match Over
          </button>
        </div>
      </div>
    );
  }
}

export default StartMatch;
