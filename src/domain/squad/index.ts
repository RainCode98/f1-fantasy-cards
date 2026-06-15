import type { FantasyCard } from '../cards';

export interface SquadSlot {
  key: 'driverOne' | 'driverTwo' | 'constructor' | 'upgrade';
  card?: FantasyCard;
}

export interface Squad {
  id: string;
  name: string;
  slots: SquadSlot[];
}
