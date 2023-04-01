import { assetsPaths } from '../utils/constants';

export class BoardView {
	private keyNames: { board: string };
	constructor() {
		this.keyNames = {
			board: 'board',
		};
	}
	public load(scene: Phaser.Scene) {
		scene.load.image(this.keyNames.board, assetsPaths.boards.default);
	}
	public create(scene: Phaser.Scene) {
		const board = scene.add.image(0, 0, this.keyNames.board).setOrigin(0, 0);
		board.setOrigin(0, 0);
		board.setScale(5, 5);
	}
}