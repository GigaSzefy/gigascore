import React from "react";
import { useEffect, useState } from "react"
import { ApiFootball } from "../../services/api/api-football"
import { LeagueListType } from "../../types/leagueList";
import "./leaguelist.css"
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

const LeagueList:React.FC = () => {
  const navigate = useNavigate();

    const [leagueListData, setleagueListData] = useState<LeagueListType[]>([]);
    const topLeagues = leagueListData.slice(0,10);

    useEffect(() => {
        (async () => {
            const standingsData = await ApiFootball.getLeagues()
            console.log(standingsData);
            setleagueListData(standingsData)
        })();
    },[])

    return (
        <>
            <p className="league-header"> <FaStar />My Leagues</p>
            { 
                topLeagues.map((item) => (
                  <div
                     key={item.league.id} className="league-container" onClick={() => navigate(`/standings/${item.league.id}`)}>
                        <span className="league-logo"><img src={item.league.logo} alt="logo" /></span>
                        <span className="league-name">{item.league.name}</span>
                        </div>
                ))
            }
        </>
    );
}

export default LeagueList