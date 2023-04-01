import { Piece } from './piece';

export type Square = {
	piece: Piece | undefined;
};

export class Board {
	private readonly board: Square[][];

	constructor() {
		this.board = this.createEmptyBoard();
		// Initialize an empty 8x8 board with alternating colors
		// this.board = new Array(8).fill(null).map((_, rowIndex) =>
		// 	new Array(8).fill(null).map((__, colIndex) => {
		// 		const color = (rowIndex + colIndex) % 2 === 0 ? PieceColor.White : PieceColor.Black;
		// 		return {
		// 			piece: null,
		// 			color,
		// 		};
		// 	})
		// );
	}

	public getBoard (): Square[][] {
		return this.board;
	}

	public getSquare (row: number, col: number): Square | undefined {
		return this.board[row]?.[col];
	}

	public movePiece (fromRow: number, fromCol: number, toRow: number, toCol: number): void {
		// const fromSquare = this.getSquare(fromRow, fromCol);
		// const toSquare = this.getSquare(toRow, toCol);
		// if (!fromSquare || !toSquare || fromSquare.piece === null) {
		// 	throw new Error('Invalid move');
		// }

		// // Move the piece to the new square
		// toSquare.piece = fromSquare.piece;
		// fromSquare.piece = null;
	}

	public setPiece (row: number, col: number, piece: Piece | undefined): void {
		const square = this.getSquare(row, col);
		if (!square) {
			throw new Error('Invalid square');
		}
		square.piece = piece;
	}
	public clearPieces () {
		for (let row = 0; row < this.board.length; row++) {
			for (let col = 0; col < this.board[row].length; col++) {
				this.board[row][col].piece = undefined;
			}
		}
	}
	private createEmptyBoard (): Square[][] {
		return Array.from({ length: 8 }, () =>
			Array.from({ length: 8 }, () => ({ piece: undefined }))
		);
	}
}