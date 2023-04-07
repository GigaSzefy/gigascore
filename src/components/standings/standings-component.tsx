import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ApiFootball } from "../../services/api/api-football";
import { LeagueData } from "../../types/standings";
import "./standings-component.css"

const LeagueStandings: React.FC = () => {
  const [standingsData, setStandingsData] = useState<LeagueData[]>([]);
  const { leagueId } = useParams<{ leagueId: string }>();

  const parsedLeagueId = parseInt(leagueId ?? "0", 10);

  useEffect(() => {
    (async () => {
      const standings = await ApiFootball.getStandings(parsedLeagueId, 2022);
      console.log(standings);
     standings && setStandingsData(standings);
    })();
    
  }, [leagueId]);


  const formatLetter = (letter: string): string => {
    switch (letter) {
      case 'W':
        return 'win';
      case 'D':
        return 'draw';
      case 'L':
        return 'loss';
      default:
        return '';
    }
  };


  return (
    <div className="standings-container">
      {standingsData.map((item) => (
        <div className="league-header" key={item.league.id}>
        <img title="logo" src={item.league.logo}></img>
        <h1>{item.league.name}</h1>
        <p>{item.league.season}</p>
        </div>
      ))}
      <table className="standings">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th title="Matches played">MP</th>
            <th title="Wins">W</th>
            <th title="Draws">D</th>
            <th title="Losses">L</th>
            <th title="Goals">G</th>
            <th title="Points">PTS</th>
            <th title="Form">Form</th>
          </tr>
        </thead>
        <tbody>
       {standingsData.map((item) => (
        item.league.standings.map((standings) => (
          standings.map((standingsitem) => (
            
           <tr key={standingsitem.team.id}>
             <td> {standingsitem.rank}</td>
             <td><img className="team-logo-table" title="logo" src={standingsitem.team.logo} />{standingsitem.team.name}</td>
             <td>{standingsitem.all.played}</td>
             <td>{standingsitem.all.win}</td>
             <td>{standingsitem.all.draw}</td>
             <td>{standingsitem.all.lose}</td>
             <td>{standingsitem.all.goals.for}:{standingsitem.all.goals.against}</td>
             <td>{standingsitem.points}</td>
             <td>
             {standingsitem.form.split('').map((letter, index) => (
                <span key={index} className={` team-form-letter ${formatLetter(letter)}`}>{letter}</span>
             ))}
             </td>
             </tr>
           
           
          ))
        ))
       ))}
       </tbody>
        
      </table>
    </div>
  );
};

export default LeagueStandings;
