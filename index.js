import phaser from './phaser.min.js';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import GameOver from './Scenes/GameOverScene';
// import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
// import OptionsScene from './Scenes/OptionsScene';
// import CreditsScene from './Scenes/CreditsScene';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    // this.scene.add('Boot', BootScene);
    // this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    // this.scene.add('Options', OptionsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOver);
    this.scene.start('Title');
  }
}
 
window.game = new Game();
