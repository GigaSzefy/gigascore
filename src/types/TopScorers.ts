interface Player {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string;
      country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  }
  
  interface Team {
    id: number;
    name: string;
    logo: string;
  }
  
  interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  }
  
  interface Games {
    appearences: number;
    lineups: number;
    minutes: number;
    number: null;
    position: string;
    rating: string;
    captain: boolean;
  }
  
  interface Substitutes {
    in: number;
    out: number;
    bench: number;
  }
  
  interface Shots {
    total: number;
    on: number;
  }
  
  interface Goals {
    total: number;
    conceded: number;
    assists: number;
    saves: null;
  }
  
  interface Passes {
    total: number;
    key: number;
    accuracy: number;
  }
  
  interface Tackles {
    total: number;
    blocks: number;
    interceptions: number;
  }
  
  interface Duels {
    total: number;
    won: number;
  }
  
  interface Dribbles {
    attempts: number;
    success: number;
    past: null;
  }
  
  interface Fouls {
    drawn: number;
    committed: number;
  }
  
  interface Cards {
    yellow: number;
    yellowred: number;
    red: number;
  }
  
  interface Penalty {
    won: null;
    commited: null;
    scored: number;
    missed: number;
    saved: null;
  }
  
  interface Statistics {
    team: Team;
    league: League;
    games: Games;
    substitutes: Substitutes;
    shots: Shots;
    goals: Goals;
    passes: Passes;
    tackles: Tackles;
    duels: Duels;
    dribbles: Dribbles;
    fouls: Fouls;
    cards: Cards;
    penalty: Penalty;
  }
  
  export interface PlayerStats {
    player: Player;
    statistics: Statistics[];
  }
  