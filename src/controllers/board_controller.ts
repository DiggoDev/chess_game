import { Board } from '../models/chess/board';
import { createPiece, pieces } from '../models/chess/piece';
import { PieceColor, pieceColors } from '../models/chess/piece_color';
// import { validMoves } from './board_utils';

interface Move {
	from: string;
	to: string;
}

class BoardController {
	private board: Board;
	private turn: PieceColor;

	constructor() {
		this.board = new Board();
		this.turn = 'white';
	}
	public initBoard () {
		this.board.clearPieces();

		const pieceOrder = [pieces.Rook, pieces.Knight, pieces.Bishop, pieces.Queen, pieces.King, pieces.Bishop, pieces.Knight, pieces.Rook];

		for(let i = 0; i < 8; i++) {
			this.board.setPiece(0, i, createPiece(pieceColors.black, pieceOrder[i]));
			this.board.setPiece(1, i, createPiece(pieceColors.black, pieces.Pawn));
			this.board.setPiece(6, i, createPiece(pieceColors.white, pieces.Pawn));
			this.board.setPiece(7, i, createPiece(pieceColors.white, pieceOrder[i]));
		}
	}

	public move (move: Move): void {
		// const { from, to } = move;
		// const fromPiece = this.board.getPiece(from);
		// const toPiece = this.board.getPiece(to);

		// if (!fromPiece) {
		// 	throw new Error(`No piece found at position ${from}`);
		// }

		// if (fromPiece.color !== this.turn) {
		// 	throw new Error(`It's not ${fromPiece.color}'s turn`);
		// }

		// const possibleMoves = validMoves(fromPiece, this.board);

		// if (!possibleMoves.includes(to)) {
		// 	throw new Error(`Invalid move: ${from} to ${to}`);
		// }

		// this.board.movePiece(from, to);

		// if (toPiece && toPiece.color !== fromPiece.color) {
		// 	this.board.capturePiece(to);
		// }

		this.turn = this.turn === 'white' ? 'black' : 'white';
	}

	public getTurn (): PieceColor {
		return this.turn;
	}

	public getBoard (): Board {
		return this.board;
	}

	public getPiece (position: string) {
		// return this.board.getPiece(position);
	}
}

export { BoardController };

