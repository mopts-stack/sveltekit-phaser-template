import Phaser from 'phaser';

import LoadingSplash from './scenes/Splash';
import PreloaderScene from './scenes/PreloaderScene';
import GameScene from './scenes/GameScene';

export const gameConfig = {
    width: 360,
    height: 640,
}

export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: gameConfig.width,
    height: gameConfig.height,
    title: 'My Game',
    physics: {
        default: 'matter',
        matter: {
            autoUpdate: false,
            debug: false,
            setBounds: true,
            gravity: {
                x: 0,
                y: 1
            }
        }
    },
    pixelArt: true,
    transparent: true,
    scale: {
        mode: Phaser.Scale.NONE
    },

    scene: [LoadingSplash, PreloaderScene, GameScene]
};
