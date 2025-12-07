export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface GameWithRanking extends Game {
  rankingScore: number;
  playerStats?: PlayerStats[];
}

export interface PlayerStats {
  year: number;
  players: number;
  activeUsers: number;
  newPlayers: number;
}

export type ChartType = 'bar' | 'line' | 'area' | 'pie';
