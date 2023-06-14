import { useAppSelector } from "../../app/hooks";
import { selectLeagueResult } from "../../slices/liveMatches-slice";
import "./league-results.css"

const LeagueResult: React.FC = () => {
  const leagueResult = useAppSelector(selectLeagueResult);
  return (
    <div>
      {leagueResult.map((item) => (
        <div key={item.fixture.id} className="league-result-container">
          <div className="league-result-date">
            {" "}
            {new Date(item.fixture.date)
              .toLocaleDateString("pl-PL", {
                day: "2-digit",
                month: "2-digit",
                hour: '2-digit',
                minute: '2-digit'
              })
              .replace(/\//g, ".")}
          </div>
          <div className="league-result-teams">
            <div className="league-result-home-container">
              {" "}
              <div className="league-result-team-logo"><img title="home-logo" src={item.teams.home.logo} /> </div>
              <div style={{fontWeight:item.teams.home.winner ? 'bold' :'normal'}} className="league-result-team-name">{item.teams.home.name}{" "} </div>
            </div>
            <div className="league-result-away-container">
              {" "}
             <div className="league-result-team-logo"> <img title="away-logo" src={item.teams.away.logo} />{" "} </div>
            <div style={{fontWeight:item.teams.away.winner ? 'bold' :'normal'}} className="league-result-team-name">  {item.teams.away.name}{" "} </div>
            </div>
          </div>
          <div className="league-result-fulltime-score">
            <div style={{fontWeight:item.teams.home.winner ? 'bold' :'normal'}}>{item.goals.home} </div>
            <div style={{fontWeight:item.teams.away.winner ? 'bold' :'normal'}}>{item.goals.away} </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default LeagueResult;
