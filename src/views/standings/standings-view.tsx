import React from "react";
import { useParams } from "react-router";
import LeagueList from "../../components/leagueslist/leaguelist";
import LeagueStandings from "../../components/standings/standings-component";

const StandingsView: React.FC = () => {
    
  return <div className="home-container">
    <div className="leaguelist-container"><LeagueList /></div>
    <div className="maincontent-container"> 
    <LeagueStandings />
      </div>

  </div>;
};

export default StandingsView;
