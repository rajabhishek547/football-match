import React, { Component } from "react";
class PointTable extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-12 text-center h2">Point Table</div>
        <div className="row bg-dark text-white">
          <div className="col-2">Team</div>
          <div className="col-1">Played</div>
          <div className="col-1">Won</div>
          <div className="col-1">Lost</div>
          <div className="col-1">Drownn</div>
          <div className="col-2">Goals For</div>
          <div className="col-2">Goals Against</div>
          <div className="col-2">Points</div>
        </div>
        {this.props.pointTableTeam.map((p1) => (
          <div key={p1} className="row border">
            <div className="col-2">{p1}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default PointTable;
