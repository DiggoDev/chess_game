import { assetsPaths } from '../utils/constants';

export class PieceView {
	private keyNames: { whiteKing: string };
	constructor() {
		this.keyNames = {
			whiteKing: 'whiteKing',
		};
	}
	public load(scene: Phaser.Scene) {
		scene.load.image(this.keyNames.whiteKing, assetsPaths.pieces.White.King);
	}
	public create(scene: Phaser.Scene) {
		const whiteKing = scene.add.image(50, 0, this.keyNames.whiteKing).setOrigin(0, 0);
		whiteKing.setOrigin(0, 0);
		whiteKing.setScale(3, 3);
		// scaleImageToFullGameSize(whiteKing);
		// scaleImageToFullGameSize(whiteKing);
	}
}