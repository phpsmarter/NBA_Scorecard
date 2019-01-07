/* eslint-disable default-case */
import React, { Component } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Games from "./Games";
import PlayoffStandings from "./PlayoffStandings";
import moment from 'moment';

import "./styles/index.css";
import {
  getGameScores,
  getTeamsData,
  getPlayoffStandings,
  formatSeriesData
} from "../api";

const navStyles = {
  position: "fixed",
  top: "0",
  width: "100%"
};

export const TABS = {
  GAMES: "GAMES",
  PLAYOFF_STANDINGS: "PLAYOFF_STANDINGS",
  LEADING_PLAYERS: "LEADING_PLAYERS",
}

class App extends Component {
  constructor(props) {
    super(props);
    const Today=moment().format("MMMM Do YYYY");
    this.state = {
      selectedTab: TABS.GAMES,
      games: [],
      playoffSeries: [],
      times:Today,
    };
    
    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  

  async componentWillMount() {
    const gameScores = await getGameScores();
    console.log(gameScores.data.numGames);
   
    const playoffStandings = await getPlayoffStandings();
   
    this.setState({
      games: getTeamsData(gameScores.data.games),
      playoffSeries: formatSeriesData(playoffStandings.data.series),
      todayGameNum:gameScores.data.numGames,
      
    });

    
  }

  

  setSelectedTab(selectedTab) {
    this.setState({
      selectedTab
    });
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case TABS.GAMES:
        return (<Games games={this.state.games} />);
      case TABS.PLAYOFF_STANDINGS:
        return (<PlayoffStandings playoffSeries={this.state.playoffSeries} />);
    }
  }

  render() {
    return (
      <div>
        <div style={navStyles}>
          <Header times={this.state.times} todayGameNum={this.state.todayGameNum}/>
          <Tabs setSelectedTab={this.setSelectedTab}/>
        </div>
        {this.renderSelectedTab()}
      </div>
    );
  }
}

export default App;
