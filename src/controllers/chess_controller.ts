import { BoardController } from './board_controller';

import { Game } from '../models/game';
import { players } from '../models/players';


export class ChessController {
	private game: Game;
	private boardController: BoardController;

	constructor() {
		this.game = {
			state: 'NotStarted',
			activePlayer: players.white,
			moves: [],
		};
		this.boardController = new BoardController();
		this.boardController.initBoard();
	}

	// public makeMove (move: Move): void {
	// 	if (!this.state.isGameOver) {
	// 		if (this.boardController.movePiece(move)) {
	// 			this.state.moves.push(move);
	// 			if (this.boardController.checkForCheckmate()) {
	// 				this.state.isGameOver = true;
	// 				this.state.winner = this.state.currentPlayer;
	// 			} else {
	// 				this.state.currentPlayer =
	// 					this.state.currentPlayer === Player.White ? Player.Black : Player.White;
	// 			}
	// 		}
	// 	}
	// }
}
