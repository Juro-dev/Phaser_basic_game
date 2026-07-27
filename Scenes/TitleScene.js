import 'phaser';
import config from './Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
  preload () {

  }

  create () {
	
	this.titleText = this.add.text(0, 0, 'GO-GRILL-ER.', { fontSize: '90px', fill: '#F02929' }, {fontFamily: 'Impact, Charcoal, sans-serif'});
	this.banText = this.add.text(0, 0, 'BANANA', { fontSize: '75px', fill: '#F8C949' }, {fontFamily: 'Comic Sans MS, cursive, sans-serif'});
	this.instrText1 = this.add.text(0, 0, 'Control phaser with LEFT and RIGHT keys.', { fontSize: '30px', fill: '#fff' }, {fontFamily: 'Lucida Console, Monaco, monospace'});
	this.instrText2 = this.add.text(0, 0, 'Press SPACE to shoot.', { fontSize: '30px', fill: '#fff' }, {fontFamily: 'Lucida Console, Monaco, monospace'});
	this.instrText3 = this.add.text(0, 0, 'When ready, press SPACE to play!', { fontSize: '30px', fill: '#fff' }, {fontFamily: 'Lucida Console, Monaco, monospace'});
	this.credtext = this.add.text(0, 0, 'Credits (clickable): dev.jurolytics.blog', { fontSize: '15px', fill: '#fff', wordWrap: {width: 3} }, {fontFamily: 'Lucida Console, Monaco, monospace'},)
	.setInteractive().on('pointerdown', function () {window.location.href = "http://dev.jurolytics.blog/";﻿ }, this);


	this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);
 
	Phaser.Display.Align.In.Center(
  		this.titleText,
  		this.zone
	);

	Phaser.Display.Align.In.Center(
  		this.banText,
  		this.zone
	);
 
	Phaser.Display.Align.In.Center(
  		this.instrText1,
  		this.zone
	);

	Phaser.Display.Align.In.Center(
  		this.instrText2,
  		this.zone
	);

	Phaser.Display.Align.In.Center(
  		this.instrText3,
  		this.zone
	);

	Phaser.Display.Align.In.Center(
  		this.credtext,
  		this.zone
	);

	this.titleText.setY(200);
	this.banText.setY(300);
	this.instrText1.setY(400);
	this.instrText2.setY(450);
	this.instrText3.setY(500);
	this.credtext.setY(750);

	this.timeline = this.tweens.timeline({

        targets: this.credtext,
        loop: -1,
        
        tweens: [
        {
            x: 1000,
            ease: 'Linear',
            duration: 1000
        },
        {
            y: 50,
            ease: 'Linear',
            duration: 3000,
            onUpdate: ()=>{

        	// let col = Phaser.Display.Color.Interpolate.ColorWithColor('#ffffff', '#F02929', 5000, 0);
        	// let colourInt = Phaser.Display.Color.GetColor(col.r, col.g, col.b);
        	this.credtext.setStyle({color: '#0000FF'});

    	}
        },
        {
            x: 50,
            ease: 'Linear',
            duration: 2000,
            onUpdate: ()=>{

        	this.credtext.setStyle({color: '#439c3f'});

    	}
        },
        {
            y: 750,
            ease: 'Linear',
            duration: 3000,
            onUpdate: ()=>{

        	this.credtext.setStyle({color: '#FFFF00'});

    	}
        },
        {
            x: 510,
            ease: 'Linear',
            duration: 1000,
            onUpdate: ()=>{

        	this.credtext.setStyle({color: '#ffa700'});

    	}
        }
        ]

    });

    // console.log(this.credtext.x);



	// Cursors
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

  	// this.credtext.x += 5;

  	if (this.cursors.space.isDown) {
        this.scene.start('Game');
    }

   //  if (this.credtext.x === 750 && this.credtext.y === 750) {
  	// 	this.credtext.y -= 5;
  	// }

  	// if (this.credtext.x === 750 && this.credtext.y === 50) {
  	// 	this.credtext.x -= 5;
  	// }

  	// if (this.credtext.x === 50 && this.credtext.y === 50) {
  	// 	this.credtext.y += 5;
  	// }

  	// if (this.credtext.x === 50 && this.credtext.y === 750) {
  	// 	this.credtext.x += 5;
  	// }

  }
 
};

