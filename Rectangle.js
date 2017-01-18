//Create a Rectangle class which extends the Entity class.
//A rectangle has a coordinate, a width, and a height.
//The two lines at the bottom just help define the class, it's a weird JavaScript thing.
function Rectangle(x, y, width, height) {
  Entity.call(this, x, y);
  this.width = width;
  this.height = height;

  this.draw = function(game) {
    game.ctx.fillStyle = "black";
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  this.getSolidPixels = function() {
    var all = [];
    for (var row = 0; row < this.height; row++) {
      //Note finish this
    }
  }
}
Rectangle.prototype = Object.create(Entity.prototype);
Rectangle.prototype.constructor = Rectangle;

//Create a "ColoredRect" class which extends the Rectangle class
//NOTE: I may want to change this to "StyledRect" which can have borders and such.
function ColoredRect(x, y, width, height, color) {
  Rectangle.call(this, x, y, width, height);
  this.color = color;

  this.draw = function(game) {
    game.ctx.fillStyle = this.color;
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
