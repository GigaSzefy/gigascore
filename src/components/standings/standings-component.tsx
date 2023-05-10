import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ApiFootball } from "../../services/api/api-football";
import { LeagueData } from "../../types/standings";
import "./standings-component.css"
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectStandings } from "../../slices/standings-slice";

const LeagueStandings: React.FC = () => {
  

 let standingsData = useAppSelector(selectStandings)
 


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
      {standingsData.standings.map((item) => (
        <div className="header-league" key={item.league.id}>
        <div className="header-logo"><img  title="logo" src={item.league.logo}></img></div>
        <div className="header-name">{item.league.name}</div>
        <div className="header-season">{item.league.season}</div>
        </div>
      ))}
       <div className="tabs">
 
      <Link to={''}>Standings</Link>
      <Link to={'news'}>News</Link>
      <Link to={'fixtures'}>Fixtures</Link>
      
      </div>
      <div className="table-container">
      <div className="standings">
      <div className="standings-header">
        <div className="header-rank">#</div>
        <div className="header-team">Team</div>
        <div className="header-mp" title="Matches played">MP</div>
        <div className="header-w" title="Wins">W</div>
        <div className="header-d" title="Draws">D</div>
        <div className="header-l" title="Losses">L</div>
        <div className="header-g" title="Goals">G</div>
        <div className="header-pts" title="Points">PTS</div>
        <div className="header-form" title="Form">Form</div>
      </div>
      <div className="standings-body">
        {standingsData.standings.map((item) => (
          item.league.standings.map((standings) => (
            standings.map((standingsitem) => (
              <div className="standings-row" key={standingsitem.team.id}>
                <div className="row-rank">{standingsitem.rank}</div>
                <div className="row-team">
                  <img className="team-logo-table" title="logo" src={standingsitem.team.logo} alt={`${standingsitem.team.name} logo`} />
                  <span>{standingsitem.team.name}</span>
                </div>
                <div className="row-mp">{standingsitem.all.played}</div>
                <div className="row-w">{standingsitem.all.win}</div>
                <div className="row-d">{standingsitem.all.draw}</div>
                <div className="row-l">{standingsitem.all.lose}</div>
                <div className="row-g">{standingsitem.all.goals.for}:{standingsitem.all.goals.against}</div>
                <div className="row-pts">{standingsitem.points}</div>
                <div className="row-form">
                  {standingsitem.form.split('').map((letter, index) => (
                    <span key={index} className={`team-form-letter ${formatLetter(letter)}`}>{letter}</span>
                  ))}
                </div>
              </div>
            ))
          ))
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default LeagueStandings;
