import React, { Component } from "react";
class NewMatch extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="col-12 text-center">{this.props.chooseTeam1}</h2>
        <div className="row text-center">
          {this.props.teams.map((p) => (
            <div
              key={p}
              className="col-2 bg-warning m-2"
              onClick={() => this.props.onTeamSelect1(p)}
            >
              {p}
            </div>
          ))}
        </div>
        <h2 className="col-12 text-center">{this.props.chooseTeam2}</h2>
        <div className="row text-center">
          {this.props.teams.map((p) => (
            <div
              key={p}
              className="col-2 bg-warning m-2"
              onClick={() => this.props.onTeamSelect2(p)}
            >
              {p}
            </div>
          ))}
        </div>
        <div className="col-12 text-center">
          <button
            className="btn btn-secondary"
            onClick={() => this.props.startMatch()}
          >
            Start Match
          </button>
        </div>
      </div>
    );
  }
}

export default NewMatch;
