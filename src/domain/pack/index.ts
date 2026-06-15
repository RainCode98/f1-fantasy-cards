import type { FantasyCard } from '../cards';

export interface CardPack {
  id: string;
  name: string;
  priceCredits: number;
  cardCount: number;
}

export interface OpenedPack {
  pack: CardPack;
  cards: FantasyCard[];
}
