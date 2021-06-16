import React, { Component } from "react";
class AllMatches extends Component {
  render() {
    console.log(this.props.matchScore);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 h2 text-center">
            Results of the matches so far
          </div>
        </div>
        <div className="row bg-dark text-white">
          <div className="col-3 text-center">Team1</div>
          <div className="col-3 text-center">Team2</div>
          <div className="col-3 text-center">Score</div>
          <div className="col-3 text-center">Result</div>
        </div>
        {this.props.matchScore.map((p1) => (
          <div key={p1.score} className="row border">
            <div className="col-3 text-center">{p1.team1}</div>
            <div className="col-3 text-center">{p1.team2}</div>
            <div className="col-3 text-center">{p1.score}</div>
            <div className="col-3 text-center">{p1.winner1}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default AllMatches;
