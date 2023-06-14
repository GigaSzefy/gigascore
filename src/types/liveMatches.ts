export interface LiveMatchesType {
  fixture: {
    id: number;
    date: string;
    timestamp: number;
    status: {
      short: string;
      elapsed: number;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner:boolean;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner:boolean;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
  events: any[];
}
