import React from "react";
import LeagueList from "../../components/leagueslist/leaguelist";
import "./home.css";
import LiveMatches from "../../components/liveMatches/livematches";

const HomeView: React.FC = () => {
  return (
    <div className="home-container">
      <div className="leaguelist-container">
        <LeagueList />
      </div>
      <div className="maincontent-container">
        <LiveMatches />
      </div>
    </div>
  );
};

export default HomeView;
