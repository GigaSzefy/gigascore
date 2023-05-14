import React, { useEffect } from "react";
import { useParams } from "react-router";
import LeagueList from "../../components/leagueslist/leaguelist";
import LeagueStandings from "../../components/standings/standings-component";
import { useDispatch } from "react-redux";
import { getStandingsAsync } from "../../slices/standings-slice";
import { AppDispatch, AppThunk } from "../../app/store";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";

const StandingsView: React.FC = () => {
    const { leagueId } = useParams<{ leagueId: string }>();
    const parsedLeagueId = parseInt(leagueId ?? "0", 10);
    const dispatch = useAppDispatch();
    const getStandings = async ():Promise<void> => {
      if(leagueId) {
        dispatch(getStandingsAsync(parsedLeagueId))
        
      }
    }

    useEffect(() => {
      getStandings();
    },[leagueId])
    
  return <div className="home-container">
    <div className="leaguelist-container"><LeagueList /></div>
    <div className="maincontent-container"> 
    <LeagueStandings />
      </div>

  </div>;
};

export default StandingsView;
