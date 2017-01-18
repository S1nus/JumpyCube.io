function Game(canvas) {
	
	this.objects = [];
	
	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");
		
	this.isRunning = false;
	
	this.start = function() {
		this.isRunning = true;
		this.loop();
	}
	
	this.loop = function() {
		this.clear();
		this.render();
		this.update();
		setTimeout(function(_this) {_this.loop(); }, 1, this);
	}
	
	this.clear = function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	
	this.render = function() {
		for (var i = 0; i<this.objects.length; i++) {
			try {
				this.objects[i].draw(this);
			}
			catch (e) {
				alert("there was an error drawing object " + i);
			}
		}
	}
	
	this.update = function() {
			for (var i = 0; i<this.objects.length; i++) {
					try {
						this.objects[i].update(this);
					}
					catch (e) {
							alert("there was an error in object " + i + "'s update code");
					}
			}
	}
}