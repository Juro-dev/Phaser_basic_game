import 'phaser';
import config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOver');
  }
 
  init (data)	{
    console.log('init', data);
    this.finalScore = data.score;
  }

  preload () {

  }

  create () {

	this.titleText = this.add.text(0, 0, 'Sorry, game over!', {
		fontSize: '90px',
		color: '#F02929',
		fontFamily: 'Impact, Charcoal, sans-serif',
	});
	this.scoreText = this.add.text(0, 0, 'Your score: ' + this.finalScore, {
		fontSize: '50px',
		color: '#fff',
		fontFamily: 'Impact, Charcoal, sans-serif',
	});
	// this.banText = this.add.text(0, 0, 'BANANA', { fontSize: '75px', color: '#F8C949', fontFamily: 'Comic Sans MS, cursive, sans-serif' });
	// this.instrText1 = this.add.text(0, 0, 'Control phaser with LEFT and RIGHT keys.', { fontSize: '30px', color: '#fff', fontFamily: 'Lucida Console, Monaco, monospace' });
	this.instrText2 = this.add.text(0, 0, 'Press SPACE to restart game.', {
		fontSize: '30px',
		color: '#fff',
		fontFamily: 'Lucida Console, Monaco, monospace',
	});
	// this.instrText3 = this.add.text(0, 0, 'When ready, press SPACE to play!', { fontSize: '30px', color: '#fff', fontFamily: 'Lucida Console, Monaco, monospace' });


	this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);
 
	Phaser.Display.Align.In.Center(
  		this.titleText,
  		this.zone
	);

	Phaser.Display.Align.In.Center(
  		this.scoreText,
  		this.zone
	);
 
	// Phaser.Display.Align.In.Center(
 //  		this.instrText1,
 //  		this.zone
	// );

	Phaser.Display.Align.In.Center(
  		this.instrText2,
  		this.zone
	);

	// Phaser.Display.Align.In.Center(
 //  		this.instrText3,
 //  		this.zone
	// );

	this.titleText.setY(200);
	this.scoreText.setY(350);
	// this.instrText1.setY(400);
	this.instrText2.setY(450);
	// this.instrText3.setY(500);

	// Cursors
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {
  	if (this.cursors.space.isDown) {
        this.scene.start('Game');
    }

  }
 
};

