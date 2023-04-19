import MainScene from './MainScene.js'

const config = {
  width: 640,
  height: 640,
  type: Phaser.AUTO,
  parent: 'phaser-game',
  scene: [MainScene],
  //backgroundColor:white
}

new Phaser.Game(config)
