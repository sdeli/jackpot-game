export enum GameCategory {
  NewGames = 'new',
  TopGames = 'top',
  Slots = 'slots',
  Jackpot = 'jackpot',
  Live = 'live',
  Blackjack = 'blackjack',
  Roulette = 'roulette',
  Table = 'table',
  Poker = 'poker',
  Other = 'other',
}

export interface Game {
  id: string;
  categories: GameCategory[];
  name: string;
  image: string;
  jackpot: number;
}

export interface Jackpot {
  game: string;
  amount: number;
}

// ball
// virtual

// Live
// table

// no top ribbon on the image neather provided
// no new ribbon seen
// no fonts families, sizes and weights provided
