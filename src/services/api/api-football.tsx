import { LeagueData } from "../../types/standings";

const apiFootballDef = () => {
    const getLeagues = async () => {
        try {
            

                const options = {
                  method: 'GET',
                  headers: {
                    'X-RapidAPI-Key': '7e909719d899edf4d9bc9ccaf6028a9c',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                  }
                };
                const response = await fetch('https://v3.football.api-sports.io/leagues', options)
                const standings = await response.json();
                return standings.response
                
             
        }
        catch (error) {}
    }

    const getStandings = async (
      league:number,
      season:number,
    ):Promise<LeagueData[] | undefined> => {
      try {
            

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '7e909719d899edf4d9bc9ccaf6028a9c',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        };
        const response = await fetch(`https://v3.football.api-sports.io/standings?league=${league}&season=${season}`, options)
        const standings = await response.json()
        return standings.response
        
     
}
catch (error) {}

    }

    return{getLeagues, getStandings} 

}

export const ApiFootball = apiFootballDef();