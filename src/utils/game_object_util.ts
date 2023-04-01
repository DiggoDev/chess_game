import { gameHeight, gameWidth } from './constants';

export function scaleImageToFullGameSize(image: Phaser.GameObjects.Image) {
	const scaleX = gameWidth / image.width;
	const scaleY = gameHeight / image.height;

	image.setScale(scaleX, scaleY);
}