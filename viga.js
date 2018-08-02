function Viga(x, y, w, h, a) {
		var opciones = {
		friction: 0.0,
		restitution: 0.0,
		isStatic: true,
		angle: a
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
		stroke(0);
		fill(237, 90, 85);
		rect(0, 0, w, h);
		pop();
	}
}