export type CardRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type CardRole = 'driver' | 'constructor' | 'principal' | 'upgrade';

export interface FantasyCard {
  id: string;
  name: string;
  role: CardRole;
  rarity: CardRarity;
  rating: number;
  teamId?: string;
}
