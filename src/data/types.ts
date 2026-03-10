export type SportCategory =
  | 'Football'
  | 'Baseball'
  | "Men's Basketball"
  | "Women's Basketball"
  | 'Softball'
  | 'Soccer'
  | 'Volleyball'
  | 'Track & Field'
  | 'Gymnastics'
  | 'Swimming & Diving'
  | 'Tennis'
  | 'Golf';

export interface UpcomingGame {
  id: string;
  sport: SportCategory;
  opponent: string;
  location: 'Home' | 'Away' | 'Neutral';
  venue: string;
  date: string;
  time: string;
  isConference?: boolean;
}

export interface GameScore {
  id: string;
  sport: SportCategory;
  opponent: string;
  location: 'Home' | 'Away' | 'Neutral';
  date: string;
  lsuScore: number;
  opponentScore: number;
  result: 'W' | 'L' | 'T';
  isConference?: boolean;
}
