import React, { useEffect } from "react";
import LeagueList from "../../components/leagueslist/leaguelist";
import "./home.css";
import LiveMatches from "../../components/liveMatches/livematches";
import { useAppDispatch } from "../../app/hooks";
import { getFixturesAsync } from "../../slices/liveMatches-slice";

const HomeView: React.FC = () => {
  const dispatch = useAppDispatch();
  const getFixtures = async(): Promise<void> => {
    dispatch(getFixturesAsync())
  }

  useEffect(() => {
    getFixtures();
  }, [])
  
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
