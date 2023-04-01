import Phaser from 'phaser';

import { BoardView } from '../board_view';
import { PieceView } from '../piece_view';

export class GameScene extends Phaser.Scene {
	private boardView: BoardView;
	private pieceView: PieceView;
	constructor() {
		super({ key: 'GameScene' });
		this.boardView = new BoardView();
		this.pieceView = new PieceView();
	}
	preload () {
		this.boardView.load(this);
		this.pieceView.load(this);
		// this.load.image('white-pawn', 'assets/white-pawn.png');
		// this.load.image('white-rook', 'assets/white-rook.png');
		// this.load.image('white-knight', 'assets/white-knight.png');
		// this.load.image('white-bishop', 'assets/white-bishop.png');
		// this.load.image('white-queen', 'assets/white-queen.png');
		// this.load.image('white-king', 'assets/white-king.png');
		// this.load.image('black-pawn', 'assets/black-pawn.png');
		// this.load.image('black-rook', 'assets/black-rook.png');
		// this.load.image('black-knight', 'assets/black-knight.png');
		// this.load.image('black-bishop', 'assets/black-bishop.png');
		// this.load.image('black-queen', 'assets/black-queen.png');
		// this.load.image('black-king', 'assets/black-king.png');
	}

	create () {
		this.cameras.main.setBackgroundColor('#ffffff');
		this.boardView.create(this);
		this.pieceView.create(this);
		// Set the background color to green
		// this.board = new BoardView(this, this.game.board, SquareSize, Pieces);
		// this.board.render();
	}
}