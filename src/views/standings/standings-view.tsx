import React, { useEffect } from "react";
import { useParams } from "react-router";
import LeagueList from "../../components/leagueslist/leaguelist";
import { getStandingsAsync, getTopscorersAsync } from "../../slices/standings-slice";
import { useAppDispatch } from "../../app/hooks";
import LeagueInfo from "../../components/league-info/league-info";
import { getCustomNewsAsync } from "../../slices/news-slice";

const StandingsView: React.FC = () => {
    const { leagueId } = useParams<{ leagueId: string }>();
    const parsedLeagueId = parseInt(leagueId ?? "0", 10);
    const dispatch = useAppDispatch();
    const getStandings = async ():Promise<void> => {
      if(leagueId) {
        dispatch(getStandingsAsync(parsedLeagueId))
        dispatch(getTopscorersAsync(parsedLeagueId))
      }
    }

    useEffect(() => {
      getStandings();
    },[leagueId])
    
  return <div className="home-container">
    <div className="leaguelist-container"><LeagueList /></div>
    <div className="maincontent-container"> 
    <LeagueInfo />
      </div>

  </div>;
};

export default StandingsView;
