import { Game } from 'phaser';

import { GameController } from './controllers/game_controller';
import { gameHeight, gameWidth } from './utils/constants';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: gameWidth,
	height: gameHeight,
	parent: 'game',
	scene: [],
};

const game = new Game(config);

const controller = new GameController(game);

(window as any).game = game;