export interface MatchScore {
  squadId: string;
  points: number;
}

export interface RaceMatch {
  id: string;
  circuitName: string;
  round: number;
  scores: MatchScore[];
}
