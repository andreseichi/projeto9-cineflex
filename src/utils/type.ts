export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  posterURL: string;
  overview: string;
}

export interface Sessions {
  id: number;
  days: SessionsDays[];
  overview: string;
  posterURL: string;
  releaseDate: string;
  title: string;
}

export interface SessionsDays {
  date: string;
  id: number;
  showtimes: Showtime[];
  weekday: string;
}

export interface Showtime {
  name: string;
  id: number;
}

export interface Session {
  id: number;
  day: {
    date: string;
    id: number;
    weekday: string;
  };
  movie: Movie;
  name: string;
  seats: Seat[];
}

export interface Seat {
  id: number;
  isAvailable: boolean;
  name: string;
}
