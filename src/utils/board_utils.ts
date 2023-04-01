// import { Board, Square } from '../models/chess/board';
// import { PieceColorType } from '../models/chess/piece';
// // import { Piece, PieceColor, PieceColorType } from './constants';

// const startupSquareBoard: Square[][] = initializeStartupSquareBoard();


// // Initializes a new chess board with pieces in their starting positions.
// export function initializeBoard (): Board {
// 	const squareBoard:  Square[][] = [];
// 	for (let i = 0; i < 8; i++) {
// 		squareBoard.push([]);
// 		for (let j = 0; j < 8; j++) {
// 			squareBoard[i].push({ piece: null, color: PieceColor.Black });
// 		}
// 	}

// 	squareBoard[0][0] = { piece: Piece.Rook, color: PieceColor.Black };
// 	squareBoard[0][1] = { piece: Piece.Knight, color: PieceColor.Black };
// 	squareBoard[0][2] = { piece: Piece.Bishop, color: PieceColor.Black };
// 	squareBoard[0][3] = { piece: Piece.Queen, color: PieceColor.Black };
// 	squareBoard[0][4] = { piece: Piece.King, color: PieceColor.Black };
// 	squareBoard[0][5] = { piece: Piece.Bishop, color: PieceColor.Black };
// 	squareBoard[0][6] = { piece: Piece.Knight, color: PieceColor.Black };
// 	squareBoard[0][7] = { piece: Piece.Rook, color: PieceColor.Black };

// 	for (let i = 0; i < 8; i++) {
// 		squareBoard[1][i] = { piece: Piece.Pawn, color: PieceColor.Black };
// 		squareBoard[6][i] = { piece: Piece.Pawn, color: PieceColor.White };
// 	}

// 	squareBoard[7][0] = { piece: Piece.Rook, color: PieceColor.White };
// 	squareBoard[7][1] = { piece: Piece.Knight, color: PieceColor.White };
// 	squareBoard[7][2] = { piece: Piece.Bishop, color: PieceColor.White };
// 	squareBoard[7][3] = { piece: Piece.Queen, color: PieceColor.White };
// 	squareBoard[7][4] = { piece: Piece.King, color: PieceColor.White };
// 	squareBoard[7][5] = { piece: Piece.Bishop, color: PieceColor.White };
// 	squareBoard[7][6] = { piece: Piece.Knight, color: PieceColor.White };
// 	squareBoard[7][7] = { piece: Piece.Rook, color: PieceColor.White };

// 	return new Board(startupSquareBoard);
// }

// // Returns true if the given square is empty.
// export function isEmptySquare (square: Square): boolean {
// 	return !square.piece;
// }

// // Returns true if the given square contains a piece of the specified color.
// export function isSquareOccupiedByColor (square: Square, color: PieceColorType): boolean {
// 	return square.color === color;
// }

// // Returns true if the piece on the source square can move to the destination square on the given board.
// export function isMoveValid (board: Board, source: [number, number], destination: [number, number]): boolean {
// 	const sourceSquare = board[source[0]][source[1]];
// 	const destinationSquare = board[destination[0]][destination[1]];

// 	// Cannot move to a square occupied by a piece of the same color.
// 	if (destinationSquare.piece && destinationSquare.color === sourceSquare.color) {
// 		return false;
// 	}

// 	// TODO: Implement additional logic to determine if the move is valid.
// 	// This will depend on the type of piece and the direction of movement.
// 	return true;
// }

// function initializeStartupSquareBoard() {
// 	const squareBoard:  Square[][] = [];
// 	for (let i = 0; i < 8; i++) {
// 		squareBoard.push([]);
// 		for (let j = 0; j < 8; j++) {
// 			squareBoard[i].push({ piece: null, color: PieceColor.Black });
// 		}
// 	}

// 	squareBoard[0][0] = { piece: Piece.Rook, color: PieceColor.Black };
// 	squareBoard[0][1] = { piece: Piece.Knight, color: PieceColor.Black };
// 	squareBoard[0][2] = { piece: Piece.Bishop, color: PieceColor.Black };
// 	squareBoard[0][3] = { piece: Piece.Queen, color: PieceColor.Black };
// 	squareBoard[0][4] = { piece: Piece.King, color: PieceColor.Black };
// 	squareBoard[0][5] = { piece: Piece.Bishop, color: PieceColor.Black };
// 	squareBoard[0][6] = { piece: Piece.Knight, color: PieceColor.Black };
// 	squareBoard[0][7] = { piece: Piece.Rook, color: PieceColor.Black };

// 	for (let i = 0; i < 8; i++) {
// 		squareBoard[1][i] = { piece: Piece.Pawn, color: PieceColor.Black };
// 		squareBoard[6][i] = { piece: Piece.Pawn, color: PieceColor.White };
// 	}

// 	squareBoard[7][0] = { piece: Piece.Rook, color: PieceColor.White };
// 	squareBoard[7][1] = { piece: Piece.Knight, color: PieceColor.White };
// 	squareBoard[7][2] = { piece: Piece.Bishop, color: PieceColor.White };
// 	squareBoard[7][3] = { piece: Piece.Queen, color: PieceColor.White };
// 	squareBoard[7][4] = { piece: Piece.King, color: PieceColor.White };
// 	squareBoard[7][5] = { piece: Piece.Bishop, color: PieceColor.White };
// 	squareBoard[7][6] = { piece: Piece.Knight, color: PieceColor.White };
// 	squareBoard[7][7] = { piece: Piece.Rook, color: PieceColor.White };

// 	return squareBoard;
// }
