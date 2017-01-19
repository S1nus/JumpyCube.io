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

	this.getBox = function() {
		return {"x":this.x, "y":this.y, "width":1, "height":1};
	};

	this.pixelInBox = function(box, x, y) {
		return true;
	};

	this.getOverlappingBox = function(object) {
		 myBox = this.getBox();
		 otherBox = object.getBox();
		 xMin = Math.max(myBox.x, otherBox.x);
		 yMin = Math.max(myBox.y, otherBox.y);
		 xMax = Math.min(myBox.x+myBox.width, otherBox.x+otherBox.width);
		 yMax = Math.min(myBox.y+myBox.height, otherBox.y+otherBox.height);
		 if (xMin >= xMax || yMin >= yMax) {
			 return null;
		 }
		 else {
			 return {"x":xMin, "y":yMin, "width":xMax-xMin, "height":yMax-yMin};
		 }
	};

	this.isTouching = function(other) {
		overLap = this.getOverlappingBox(other);
		if (overLap == null) {
			return false;
		}
		for (var row = overLap.y; row < overLap.y+overLap.height; row++) {
			for (var coll = overLap.x; coll < overLap.x+overLap.width; coll++) {
				if (this.pixelInBox(overLap, coll, row) && other.pixelInBox(overLap, coll, row)) {
					return true;
				}
			}
		}
		return false;
	};
}
