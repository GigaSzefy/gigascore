import React, { useEffect, useState } from "react";
import { LiveMatchesType } from "../../types/liveMatches";
import "./livematches.css";
import { ApiFootball } from "../../services/api/api-football";

const LiveMatches: React.FC = () => {
  const [liveMatches, setLiveMatches] = useState<LiveMatchesType[]>([]);

  useEffect(() => {
    const fetchLiveMatches = async () => {
      const data = await ApiFootball.getLiveMatches();
      setLiveMatches(data || []);
    };

    fetchLiveMatches();
  }, []);

  const convertTimestampToTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const groupMatchesByLeague = (matches: LiveMatchesType[]) => {
    const groupedMatches: { [league: string]: LiveMatchesType[] } = {};

    matches.forEach((match) => {
      const leagueName = match.league.name;
      const countryName = match.league.country.toUpperCase();
      const leagueWithCountry = `${countryName} ┇ ${leagueName}`;

      if (groupedMatches[leagueWithCountry]) {
        groupedMatches[leagueWithCountry].push(match);
      } else {
        groupedMatches[leagueWithCountry] = [match];
      }
    });

    return groupedMatches;
  };

  const groupedMatches = groupMatchesByLeague(liveMatches);

  return (
    <>
      <div>
        {Object.keys(groupedMatches).map((leagueName) => (
          <div key={leagueName} className="match-radius">
            <h2 className="fixtures-league-name">{leagueName}</h2>
            {groupedMatches[leagueName].map((match, matchIndex) => {
              const time = convertTimestampToTime(match.fixture.timestamp);
              const hasMatchBelow =
                matchIndex < groupedMatches[leagueName].length - 1;
              return (
                <div key={match.fixture.id} className="match-container">
                  <div className="match-time">{time}</div>
                  <div className="home-team-logo">
                    <img
                      className="logo"
                      src={`${match.teams.home.logo}`}
                      alt="homeLogo"
                    />
                  </div>
                  <div className="home-team-name">{match.teams.home.name}</div>
                  <div className="home-team-score">{match.goals.home}</div>
                  <div className="away-team-logo">
                    <img
                      className="logo"
                      src={`${match.teams.away.logo}`}
                      alt="awayLogo"
                    />
                  </div>
                  <div className="away-team-name">{match.teams.away.name}</div>
                  <div className="away-team-score">{match.goals.away}</div>
                  {hasMatchBelow && <hr className="match-separator" />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default LiveMatches;
