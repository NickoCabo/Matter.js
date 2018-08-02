var Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies;

var engine;
var world;
var cajas = [];
var circulos = [];
var vigas = [];

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	vigas.push(new Viga(120, 100, width * 0.6, 20, 0.4));
	vigas.push(new Viga(250, 330, width * 0.6, 20, -0.3));
}

function mousePressed() {
	cajas.push(new Caja(mouseX, mouseY, random(10,40), random(10,40)));
}

function mouseDragged() {
	circulos.push(new Circulo(mouseX, mouseY, random(5,10), random(5,10)));
}

function draw() {
	background (47, 193, 211);
	for (var i = 0; i < cajas.length; i++) {
		cajas[i].show();
	}
	for (var i = 0; i < circulos.length; i++) {
		circulos[i].show();
	}
	for (var i = 0; i < vigas.length; i++) {
		vigas[i].show();	
	}
}