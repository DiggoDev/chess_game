
import { Game } from 'phaser';

import { GameScene } from '../views/scenes/game_scene';
import { ChessController } from './chess_controller';


class GameController {
	private chessController: ChessController;
	constructor(game: Game) {
		const gameScene = new GameScene();
		game.scene.add('GameScene', gameScene);
		game.scene.start('GameScene');
		this.chessController = new ChessController();
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

export { GameController };

