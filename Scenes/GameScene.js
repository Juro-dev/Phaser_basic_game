import 'phaser';

var player;
var cursors;
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    // var player;
    // var bullets;
    // var fireButton;
    // var bullet = 0;
    // var banana;
    // var cursors;
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('banana', './assets/banana-42793_640.png');
    this.load.image('phaser', './assets/blaster2.png');
    this.load.image('laser', './assets/laser2.png');
    this.load.image('fire', './assets/fire_01.png');
    this.load.image('platform', './assets/platformIndustrial_063.png');
  }
 
  create () {
    // this.stage.backgroundColor = "#b9eaff";
    // this.physics.startSystem(Phaser.Physics.ARCADE);
    this.bulletTime = 0;
    this.alive = 0;
    this.hit = 0;
    // this.timeText = this.add.text(1000, 50);
    this.hitText = this.add.text(1000, 70);
    this.hitText.setStyle({fontSize: '30px'});

    //  The player
    this.player = this.physics.add.sprite(380, 719, 'phaser').setCollideWorldBounds(true);
    this.player.enableBody = true;


    // The banana
    this.banana = this.physics.add.sprite(Phaser.Math.Between(0, 800), 0, 'banana').setScale(.2 , .2 ).setCollideWorldBounds(true, 0.7, 0.7);
    // this.banana.anchor.setTo(0.5, 0.5);
    this.banana.enableBody = true;

    // Platform

    // this.platforms = this.physics.add.staticGroup();

    this.platform = this.physics.add.sprite(600, 800, 'platform');
    this.platform.enableBody = true;
    this.platform.body.allowGravity = false;
    this.platform.body.immovable = true;


    // Cursors
    this.cursors = this.input.keyboard.createCursorKeys();

    //  Bullets
    this.bullets = this.physics.add.group({
      // setScale: { x: 0.1, y: 0.1 },
      defaultKey: 'laser',
      maxSize: 10
    });

    this.particles = this.add.particles('fire');

    this.physics.add.collider(this.player, this.platform);

    this.physics.add.collider(this.bullets, this.banana, function (bullet, banana) {
      this.hit += 1;
      banana.destroy();
      bullet.setTint(0xF02929);
      bullet.setAngle(360);
      bullet.body.angularVelocity = 500;

      if (bullet.body.velocity.x === 0) {
        this.randNum = Math.random();
        if (this.randNum >= 0.5) {
            bullet.body.velocity.setTo(600,-600);
        } 
        else {
            bullet.body.velocity.setTo(-600,-600);
        }
      }
      if (bullet.body.velocity.x > 0 ) {
        this.randNum = Math.random();
        if (this.randNum >= 0.5) {
            bullet.body.velocity.setTo(600,-600);
        } 
        else {
            bullet.body.velocity.setTo(-600,-600);
        }
      }
      if (bullet.body.velocity.x < 0 ) {
        this.randNum = Math.random();
        if (this.randNum >= 0.5) {
            bullet.body.velocity.setTo(600,-600);
        } 
        else {
            bullet.body.velocity.setTo(-600,-600);
        }
      }
      setTimeout(() => {
        bullet.clearTint();
        bullet.body.angularVelocity = 0;
      }, 1000);
      // this.tweens.add({  
      //   targets: bullet, // on the player 
      //   onStart: function () {
      //     bullet.setTint(0xF02929);
      //   },
      //   onUpdate: function () {
      //     bullet.clearTint();
      //   },
      //   duration: 500, // for 200ms
      //   yoyo: true // at the end, go back to original scale 
      // });
    }, null, this);

    this.physics.add.collider(this.player, this.banana, function (player, banana) {
      
      this.particles.setPosition(this.player.x, this.player.y);
      this.particles.createEmitter({
        speed: { min: -300, max: 300 },
        tint: 0xF02929,
        angle: { min: -45, max: -135 },
        scale: { start: 0.3, end: 0 },
        lifespan: { min: 1000, max: 1100 },
        blendMode: 'ADD',
        // frequency: 110,
        maxParticles: 40
      });
      this.player.destroy();
      this.banana.destroy();
      this.alive = 1;
      // this.time.;
      this.gameover();
      
    }, null, this);

    this.physics.add.collider(this.platform, this.banana, function () {
      
      this.particles.setPosition(this.player.x, this.player.y);
      this.particles.createEmitter({
        speed: { min: -300, max: 300 },
        tint: 0xF02929,
        angle: { min: -45, max: -135 },
        scale: { start: 0.3, end: 0 },
        lifespan: { min: 1000, max: 1100 },
        blendMode: 'ADD',
        // frequency: 110,
        maxParticles: 40
      });
      this.player.destroy();
      this.banana.destroy();
      this.alive = 1;
      // this.timeText.setText('Time: ' + this.time.now + ' seconds');
      this.gameover();
      
    }, null, this);

    // this.bullets.setAll('scale.x', 0.1);
    // this.bullets.setAll('scale.y', 0.1);
    // this.bullets.setAll('outOfBoundsKill', true);
    // this.bullets.setAll('checkWorldBounds', true); 

    // game.physics.arcade.gravity.y = 200;
    
    // bullets.body.allowGravity = false;

    // reset camera effects
    this.cameras.main.resetFX();

    console.log(this.time.now);

  }



  update () {

    // this.timeText.setText('Time: ' + time + ' seconds');
    this.hitText.setText('Hits: ' + this.hit);

    if (this.cursors.right.isDown) {
        this.player.x += 15;
    }

    if (this.cursors.left.isDown) {
        this.player.x -= 15;
    }

    if (this.cursors.space.isDown && this.alive === 0) {
        this.shoot();
    }


    this.bullets.children.each(function(b) {
            if (b.active) {
                if (b.y < 0) {
                    b.setActive(false);
                }
            }
    }.bind(this));
  }

  shoot () {
    if(this.time.now > this.bulletTime){
      var bullet = this.bullets.get(this.player.x + 7, this.player.y - 70).setScale(.1 , .1 );
        if (bullet) {
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.enableBody = true;
            bullet.body.allowGravity = false;
            bullet.body.velocity.y = -600;
            this.bulletTime = this.time.now + 400;
        }
    }
  }

  gameover () {
     // shake the camera
    // this.cameras.main.shake(1000);
 
    // fade camera
    this.time.delayedCall(2000, function() {
      this.cameras.main.fade(2000);
    }, [], this);
 
    // restart game
    this.time.delayedCall(3000, function() {
      this.scene.start('GameOver', {score: this.hit});
    }, [], this);
  }


};