function Circulo(x, y, r) {
	var opciones = {
		friction: 0.0,
		restitution: 0.3
	}

	this.body = Bodies.circle(x, y, r, opciones);
	this.r = r;
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
		fill(28, 210, 7);
		ellipse(0, 0, this.r*2);
		pop();
	}
}