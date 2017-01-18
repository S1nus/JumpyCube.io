/*
	Note to self:

	Best 2D collision:
	one object returns a 'function' for
*/

function Entity(x, y) {
	this.x = x;
	this.y = y;

	this.draw = function(game) {
		game.ctx.beginPath();
		game.ctx.fillStyle = "black";
		game.ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI, false);
		game.ctx.fill();
	};

	this.update = function(game) {
		return;
	};

	this.getSolidPixels = function() {
		return [[this.x, this.y]];
	};

	this.isTouching = function (obj) {

	};
}
