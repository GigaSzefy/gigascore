import { PlayerStats } from "../../types/TopScorers";
import { LiveMatchesType } from "../../types/liveMatches";
import { LeagueData } from "../../types/standings";

const apiFootballDef = () => {
  const getLeagues = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "7e909719d899edf4d9bc9ccaf6028a9c",
          "X-RapidAPI-Host": "v3.football.api-sports.io",
        },
      };
      const response = await fetch(
        "https://v3.football.api-sports.io/leagues?type=league",
        options
      );
      const standings = await response.json();
      return standings.response;
    } catch (error) {}
  };

  const getStandings = async (
    league: number,
    season: number
  ): Promise<LeagueData[] | undefined> => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "7e909719d899edf4d9bc9ccaf6028a9c",
          "X-RapidAPI-Host": "v3.football.api-sports.io",
        },
      };
      const response = await fetch(
        `https://v3.football.api-sports.io/standings?league=${league}&season=${season}`,
        options
      );
      const standings = await response.json();
      return standings.response;
    } catch (error) {}
  };

  const getLeagueTopScorers = async (
    league: number,
    season: number
  ): Promise<PlayerStats[] | undefined> => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "7e909719d899edf4d9bc9ccaf6028a9c",
          "X-RapidAPI-Host": "v3.football.api-sports.io",
        },
      };
      const response = await fetch(
        `https://v3.football.api-sports.io/players/topscorers?season=${season}&league=${league}`,
        options
      );
      const topscorers = await response.json();
      return topscorers.response;
    } catch (error) {}
  };

  const getLiveMatches = async (): Promise<LiveMatchesType[] | undefined> => {
    try {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
        {
          headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "2e249a0388msh0d061ad76067ad9p16209fjsncbf5825e197c",
          },
        }
      );
      const liveMatchesData = await response.json();
      return liveMatchesData.response;
    } catch (error) {}
  };

  return { getLeagues, getStandings, getLiveMatches, getLeagueTopScorers };
};

export const ApiFootball = apiFootballDef();
