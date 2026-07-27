import 'phaser';
 
export default {
  type: Phaser.AUTO,
  parent: 'phaser-div',
  width: 1200,
  height: 800,
  backgroundColor: '#b9eaff',
  physics: {
    default: 'arcade',
    arcade: {
    	gravity: { y: 700 },
    	debug: false
    }
  },
};