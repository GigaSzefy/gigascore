import React from "react";
import LeagueList from "../../components/leagueslist/leaguelist";
import "./home.css"

const HomeView: React.FC = () => {
  return <div className="home-container">
    <div className="leaguelist-container"><LeagueList /></div>
    <div className="maincontent-container"> Wyniki</div>

  </div>;
};

export default HomeView;
