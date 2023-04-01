export const BoardWidth = 8;
export const BoardHeight = 8;
export const SquareSize = 64;

export const windowHeight = window.innerHeight;
export const windowWidth = window.innerWidth;

const screenPadding = 100;

export const gameHeight = windowHeight - screenPadding;
export const gameWidth = windowWidth - screenPadding;

// type PieceType = 'Pawn' | 'Rook' | 'Knight' | 'Bishop' | 'Queen' | 'King';

// const Piece: Record<PieceType, PieceType> = {
// 	Pawn: 'Pawn',
// 	Rook: 'Rook',
// 	Knight: 'Knight',
// 	Bishop: 'Bishop',
// 	Queen: 'Queen',
// 	King: 'King',
// };

// type PieceColorType = 'white' | 'black';
// type PieceColorKeyType = 'White' | 'Black';
// const PieceColor: Record<PieceColorKeyType, PieceColorType> = {
// 	White: 'white',
// 	Black: 'black',
// };

// type Pieces = {
// 	[color in PieceColorType]: {
// 		[piece in keyof typeof Piece]: string;
// 	}
// }

export const assetsPaths = {
	pieces: {
		White: {
			Pawn: 'images/chess/pieces/white/W_Pawn.png',
			Rook: 'images/chess/pieces/white/W_Rook.png',
			Knight: 'images/chess/pieces/white/W_Knight.png',
			Bishop: 'images/chess/pieces/white/W_Bishop.png',
			Queen: 'images/chess/pieces/white/W_Queen.png',
			King: 'images/chess/pieces/white/W_King.png',
		},
		Black: {
			Pawn: 'assets/black_pawn.png',
			Rook: 'assets/black_rook.png',
			Knight: 'assets/black_knight.png',
			Bishop: 'assets/black_bishop.png',
			Queen: 'assets/black_queen.png',
			King: 'assets/black_king.png',
		},
	},
	boards: {
		default: 'images/chess/boards/board.png',
	}
};

