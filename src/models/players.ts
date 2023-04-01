import { PieceColor } from './chess/piece_color';
import { Player } from './player';

export const players: Record<PieceColor, Player>= {
	white: {
		id: 1,
		name: 'White Player',
		color: 'white' as PieceColor,
	},
	black: {
		id: 2,
		name: 'Black Player',
		color: 'black' as PieceColor,
	},
};
