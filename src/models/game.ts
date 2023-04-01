import { PieceType } from './chess/piece';
import { Player } from './player';

type GameState = 'NotStarted' | 'InProgress' | 'Finished';

interface Game {
  state: GameState;
  activePlayer: Player;
  winner?: Player;
  moves: string[];
}

interface Move {
  from: [number, number];
  to: [number, number];
  piece: PieceType;
}

export { Game, Move, GameState };

