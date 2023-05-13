import { useAppSelector } from "../../app/hooks";
import { selectTopScorers } from "../../slices/standings-slice";
import "./league-top-scorers.css";

const LeagueTopScorers: React.FC = () => {
  let topScorers = useAppSelector(selectTopScorers);
  return (
    <div className="topscorers-container">
      <div className="table-container">
        <div className="topscorers">
          <div className="topscorers-header">
            <div className="header-rank-players">#</div>
            <div className="header-player">Player</div>
            <div className="header-team">Team</div>
            <div className="header-goals">G</div>
            <div className="header-assists">A</div>
          </div>
          <div className="topscorers-body">
            {topScorers.map((players) =>
              players.statistics.map((stat) => (
                <div className="topscorers-row" key={players.player.id}>
                  <div className="row-rank-players"> #</div>
                  <div className="row-player">
                    <img src={players.player.photo} title="player" />
                    <span> {players.player.name} </span>
                  </div>

                  <div className="row-team">{stat.team.name}</div>
                  <div className="row-goals">{stat.goals.total} </div>
                  <div className="row-assists">{stat.goals.assists  === null ? 0 : stat.goals.assists } </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueTopScorers;
