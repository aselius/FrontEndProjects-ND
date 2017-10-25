// Udacity FEND Project 3
// Classic Frogger Game
// Jaewoo Park
// TODO: What to implement in app.js
//  1. Enemy class needs properties: location / speed
//      Enemy class needs to be placed outside of screen
//      Enemy class needs to be animated with the update function
//      Enemy objects need to be replaced to the left of screen and needs
//      to be assigned new speed.
//  2. Player class needs to be created with properties : location
//      Player object needs to move given keyboard command.
//      Player object cannot move outside of canvas.
//      Collision detector for Player object needs to be implemented.
//      With it, we need a function call to reset player obj to initial loc.

// random integer function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

//What does an enemy need?
//Properties: x loc, y loc, velocity
// Create global variable initial enemy position
    initialEnemyPosition = -101;
    this.x = initialEnemyPosition;
    this.y = y;
    this.resetRange();
    this.yUpRange = this.y;
    this.yDownRange = this.y + 80;
    this.velocity = getRandomInt(100,300);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.velocity * dt;
    this.resetRange();
    if (this.x > 505){
        this.x = initialEnemyPosition;
    }
// may not be intuitive to implement collision in enemy update prtotye fn,
// but much easier to do so here than in player update function.

    if (player.x > this.xLeftRange && player.x < this.xRightRange && player.y < this.yDownRange && player.y > this.yUpRange) {
        player.resetPlayerPostion(true);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.resetRange = function() {
    this.xLeftRange = this.x - 60;
    this.xRightRange = this.x + 60;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
// set initial position for player.
    playerInitialPositionX = 202;
    playerInitialPositionY = 400;

    this.x = playerInitialPositionX;
    this.y = playerInitialPositionY;
    this.sprite = 'images/char-boy.png';
    this.wallStatus = {
        "left" : false,
        "right" : false,
        "bottom" : true
    };
}

Player.prototype.update = function() {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function (keyPressed){
// Implement movement of player object according to key pressed.
// Need to prevent going over the blocks.
    //Print keyPressed for debugging purposes.
    //console.log("key " + keyPressed + " is pressed");
    var playerMoveHorizontal = 101;
    var playerMoveVertical = 80;
    this.wallCheckUpdate();

    // implementing player movement.
    if (keyPressed == "left"){
        if (this.wallStatus.left)
            return 1;
        else {
            this.x = this.x - playerMoveHorizontal;
        }
    }
    else if (keyPressed == "right"){
        if (this.wallStatus.right)
            return 1;
        else {
            this.x = this.x + playerMoveHorizontal;
        }
    }
    else if (keyPressed == "down"){
        if (this.wallStatus.bottom)
            return 1;
        else {
            this.y = this.y + playerMoveVertical;
        }
    }
    else if (keyPressed == "up"){
        this.y = this.y - playerMoveVertical;
        this.resetPlayerPostion();
    }
    else
        return 1;
}

Player.prototype.goalReachCheck = function (){
    var check = this.y < 1;
    return check;
}

Player.prototype.collisionCheck = function (bool){
    var bool = bool;
    return bool;
}

Player.prototype.resetPlayerPostion = function (bool){
    var bool = bool;
    var goalReached = this.goalReachCheck();
    var collisionDetected = this.collisionCheck(bool);
    if (goalReached || collisionDetected){
        this.x = playerInitialPositionX;
        this.y = playerInitialPositionY;
        gem.randomizeLocation();
    }
}

Player.prototype.wallCheckUpdate = function (){
    this.checkLeftWall();
    this.checkRightWall();
    this.checkBottomWall();
}

Player.prototype.checkLeftWall = function (){
    if (this.x == 0)
        this.wallStatus.left = true;
    else
        this.wallStatus.left = false;
}

Player.prototype.checkRightWall = function (){
    if (this.x == 404)
        this.wallStatus.right = true;
    else
        this.wallStatus.right = false;
}

Player.prototype.checkBottomWall = function (){
    if (this.y == playerInitialPositionY)
        this.wallStatus.bottom = true;
    else
        this.wallStatus.bottom = false;
}

var Gem = function() {
    this.x = 202;
    this.y = 140;
    this.xRightRange = this.x + 60;
    this.xLeftRange = this.x - 60;
    this.yUpRange = this.y;
    this.yDownRange = this.y + 80;
    this.possibleLocations = {
        "X" : [0, 101, 202, 303, 404],
        "Y" : [60, 140, 220]
    };
    this.sprite = 'images/Gem-Orange.png';
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Gem.prototype.update = function() {
    if (player.x > this.xLeftRange && player.x < this.xRightRange && player.y < this.yDownRange && player.y > this.yUpRange) {
        this.hide();
        this.resetRange();
    }
}

Gem.prototype.resetRange = function() {
    this.xRightRange = this.x + 50;
    this.xLeftRange = this.x - 50;
    this.yUpRange = this.y;
    this.yDownRange = this.y +80;
}

Gem.prototype.hide = function () {
    this.x = -100;
    this.y = 0;
}

Gem.prototype.randomizeLocation = function() {
    this.hide();
    var possibleXIndex = getRandomInt(0,4);
    var possibleYIndex = getRandomInt(0,2);
    this.x = this.possibleLocations.X[possibleXIndex];
    this.y = this.possibleLocations.Y[possibleYIndex];
    this.resetRange();
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// initialize allEnemies
var allEnemies = [];

// Push allEnemies categories
for (i = 0; i < 3; i++) {
    allEnemies.push(new Enemy(i * 80 + 60));
}

// initialize player
var player = new Player;

// initialize gem

var gem = new Gem;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
