export interface LeagueListType {
    country: {
        name:string;
        code:string;
        flag:string;
    }
    league: {
        id:number;
        name:string;
        type:string;
        logo:string;
    

    }
    seasons: [
        {
            year:number;
            start:string;
            end:string;
            current:boolean;
            coverage: {
                fixtures: {
                    events: boolean;
                    lineups: boolean;
                    statistics_fixtures: boolean;
                    statistics_players: boolean;
                  };
                  injuries: boolean;
                  odds: boolean;
                  players: boolean;
                  predictions: boolean;
                  standings: boolean;
                  top_assists: boolean;
                  top_cards: boolean;
                  top_scorers: boolean;
                  current: boolean;
                  start: string;
                  end: string;
                  year: number;
                }
            }

        
    ]
}