import React from "react";
import { useEffect, useState } from "react"
import { ApiFootball } from "../../services/api/api-football"
import { LeagueListType } from "../../types/leagueList";

const LeagueList:React.FC = () => {

    const [leagueListData, setleagueListData] = useState<LeagueListType[]>([]);

    useEffect(() => {
        (async () => {
            const standingsData = await ApiFootball.getLeagues()
            console.log(standingsData);
            setleagueListData(standingsData)
        })();
    },[])




    return (
        <>
          {
            leagueListData.map((item) => (
              <div key={item.league.id}>{item.league.name}</div>
            ))}
        </>
      );
}

export default LeagueList