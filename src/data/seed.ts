import type { CardPack, FantasyCard, Team } from '../domain';

export const teams: Team[] = [
  { id: 'redline', name: 'Redline Racing', baseColor: '#d90429', accentColor: '#ffba08' },
  { id: 'apex', name: 'Apex GP', baseColor: '#003049', accentColor: '#00b4d8' },
];

export const starterCards: FantasyCard[] = [
  { id: 'drv-ace', name: 'Ace Driver', role: 'driver', rarity: 'rare', rating: 84, teamId: 'redline' },
  { id: 'drv-rookie', name: 'Rookie Prospect', role: 'driver', rarity: 'common', rating: 71, teamId: 'apex' },
  { id: 'con-redline', name: 'Redline Chassis', role: 'constructor', rarity: 'rare', rating: 82, teamId: 'redline' },
  { id: 'upg-softs', name: 'Soft Tyre Push', role: 'upgrade', rarity: 'common', rating: 68 },
];

export const cardPacks: CardPack[] = [
  { id: 'starter-pack', name: 'Starter Pack', priceCredits: 0, cardCount: 4 },
  { id: 'premium-pack', name: 'Premium Pack', priceCredits: 500, cardCount: 5 },
];
