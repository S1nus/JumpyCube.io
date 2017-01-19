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

  this.getBox = function() {
    return {"x":this.x, "y":this.y, "width":this.width, "height":this.height};
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
ColoredRect.prototype = Object.create(Rectangle.prototype);
ColoredRect.prototype.constructor = ColoredRect;

//Here we have some circular objects
function Circle(x, y, rad) {
  Entity.call(this, x, y);
  this.rad = rad;

  this.draw = function(game) {
    game.ctx.fillStyle = "black";
    game.ctx.beginPath();
    game.ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    game.ctx.fill();
  };

  this.getBox = function() {
    return {"x":(this.x-this.rad), "y":(this.y-this.rad), "width":(this.rad*2), "height":(this.rad*2)};
  };

  this.pixelInBox = function(box, x, y) {
    //NOTE: Write the square root thingy in here!!!
    var dist = Math.sqrt((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y));
    if (dist<=this.rad) {
      return true;
    }
    else {
      return false;
    }
  }
}
Circle.prototype = Object.create(Entity.prototype);
Circle.prototype.constructor = Circle;

function ColoredCirc(x, y, rad, color) {
  Circle.call(this, x, y, rad);
  this.color = color;
  this.draw = function(game) {
    game.ctx.fillStyle=this.color;
    game.ctx.beginPath();
    game.ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
    game.ctx.fill();
  };
}
ColoredCirc.prototype = Object.create(Circle.prototype);
ColoredCirc.prototype.constructor = ColoredCirc;
