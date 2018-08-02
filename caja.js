function Caja(x, y, w, h) {
	var opciones = {
		friction: 0.1,
		restitution: 0.3
	}

	this.body = Bodies.rectangle(x, y, w, h, opciones);
	this.w = w;
	this.h = h;
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(1);
		stroke(41, 34, 31);
		fill(246, 232, 65);
		rect(0, 0, w, h);
		pop();
	}
}