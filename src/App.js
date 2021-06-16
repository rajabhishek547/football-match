import React, { Component } from "react";
import NavBar from "./components/navbar";
import FrontPage from "./components/frontPage";
import StartMatch from "./components/startMatch";
import NewMatch from "./components/newMatch";
import AllMatches from "./components/allMatches";
import PointTable from "./components/pointsTable";
import "./App.css";
class App extends Component {
  state = {
    team: ["France", "England", "Brazil", "Germany", "Argentina"],
    chooseTeam1: "Choose Team 1",
    chooseTeam2: "Choose Team 2",
    view: 1,
    team1: "",
    team2: "",
    team1Score: 0,
    team2Score: 0,
    matchScore: [],
    winner: "",
    pointTableTeam: [],
    totalMatches: 0,
  };
  selectTeam1 = (p) => {
    this.setState({ team1: p });
    this.setState({ chooseTeam1: "Team 1 :" + p });
  };
  selectTeam2 = (p) => {
    this.setState({ team2: p });
    this.setState({ chooseTeam2: "Team 2 :" + p });
  };
  startMatch = () => {
    this.state.pointTableTeam.push(this.state.team1);
    this.state.pointTableTeam.push(this.state.team2);
    if (this.state.chooseTeam1 === "") {
      alert("Choose Team 1");
    } else if (this.state.team1 === "") {
      alert("Choose Team 2");
    } else if (this.state.team2 === this.state.chooseTeam2) {
      alert("Choose Different Team");
    } else {
      this.setState({ view: 3 });
    }
  };
  onNewMatch = (p) => {
    this.setState({ view: 2 });
  };
  onAllMatch = (p) => {
    this.setState({ chooseTeam1: "Choose Team 1" });
    this.setState({ chooseTeam2: "Choose Team 1" });
    this.setState({ team1: "" });
    this.setState({ team2: "" });
    this.setState({ team1Score: 0 });
    this.setState({ team2Score: 0 });
    this.setState({ view: 4 });
  };
  onPointTable = (p) => {
    this.setState({ view: 5 });
  };
  handleScore1 = (s) => {
    this.setState({ team1Score: this.state.team1Score + 1 });
  };
  handleScore2 = (s) => {
    this.setState({ team2Score: this.state.team2Score + 1 });
  };
  handleMatchOver = () => {
    let t = "";
    this.setState({ totalMatches: this.state.totalMatches + 1 });
    if (this.state.team1Score > this.state.team2Score) {
      t = this.state.team1;
    } else if (this.state.team1Score < this.state.team2Score) {
      t = this.state.team2;
    } else {
      t = "Drawn";
    }

    let fil = [...this.state.pointTableTeam];
    const unique = new Set(fil);
    const un = [...unique];
    this.setState({ pointTableTeam: un });
    let matchScores = {
      team1: this.state.team1,
      team2: this.state.team2,
      score: this.state.team1Score + "-" + this.state.team2Score,
      winner1: t,
    };
    let matchScore = [...this.state.matchScore];
    matchScore.push(matchScores);
    this.setState({ matchScore });
    this.setState({ view: 1 });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalMatches={this.state.totalMatches} />
        <br />
        <br />
        <br />
        <main className="container">
          {this.state.view === 0 ? (
            <StartMatch />
          ) : this.state.view === 1 ? (
            <FrontPage
              view={this.state.view}
              onNewMatch={this.onNewMatch}
              onAllMatch={this.onAllMatch}
              onPointTable={this.onPointTable}
            />
          ) : this.state.view === 2 ? (
            <div>
              <FrontPage
                view={this.state.view}
                onNewMatch={this.onNewMatch}
                onAllMatch={this.onAllMatch}
                onPointTable={this.onPointTable}
              />
              <br />
              <NewMatch
                teams={this.state.team}
                onTeamSelect1={this.selectTeam1}
                onTeamSelect2={this.selectTeam2}
                startMatch={this.startMatch}
                chooseTeam1={this.state.chooseTeam1}
                chooseTeam2={this.state.chooseTeam2}
              />
            </div>
          ) : this.state.view === 3 ? (
            <StartMatch
              team1Score={this.state.team1Score}
              team2Score={this.state.team2Score}
              team1={this.state.chooseTeam1}
              team2={this.state.chooseTeam2}
              handleScore1={this.handleScore1}
              handleScore2={this.handleScore2}
              handleMatchOver={this.handleMatchOver}
            />
          ) : this.state.view === 4 ? (
            <div>
              <FrontPage
                view={this.state.view}
                onNewMatch={this.onNewMatch}
                onAllMatch={this.onAllMatch}
                onPointTable={this.onPointTable}
              />
              <br />
              <AllMatches
                team1={this.state.chooseTeam1}
                team2={this.state.chooseTeam2}
                team1Score={this.state.team1Score}
                team2Score={this.state.team2Score}
                matchScore={this.state.matchScore}
                winner={this.state.winner}
              />
            </div>
          ) : this.state.view === 5 ? (
            <div>
              <FrontPage
                view={this.state.view}
                onNewMatch={this.onNewMatch}
                onAllMatch={this.onAllMatch}
                onPointTable={this.onPointTable}
              />
              <br />
              <PointTable
                matchScore={this.state.matchScore}
                pointTableTeam={this.state.pointTableTeam}
              />
            </div>
          ) : (
            <h1>bye</h1>
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
