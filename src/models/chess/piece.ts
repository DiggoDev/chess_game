import { PieceColor } from './piece_color';

export type PieceType = 'Pawn' | 'Rook' | 'Knight' | 'Bishop' | 'Queen' | 'King';

export const pieces: Record<PieceType, PieceType> = {
	Pawn: 'Pawn',
	Rook: 'Rook',
	Knight: 'Knight',
	Bishop: 'Bishop',
	Queen: 'Queen',
	King: 'King',
};


export interface Piece {
	color: PieceColor;
	name: PieceType;
}

export function createPiece(color: PieceColor, name: PieceType): Piece {
	return {
		color,
		name,
	};
}
