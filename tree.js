//setup drawing surface
var s = Snap(1100, 730);

//background 
var sky = s.rect(0, 0, 1100, 730);
sky.attr({
	fill:"#79A3CC"
})

//grass
var grass = s.rect(0, 700, 1100, 30);
grass.attr({
	fill: "#008000"
})

//make trunk
var trunk = s.rect(460, 300, 140, 420);
trunk.attr({
	fill: "#372020"
})

//curve trunk
var curve = s.ellipse(460, 400, 30, 300);
var curve2 = s.ellipse(600, 400, 30, 300);
var curvetrunk = s.group(curve, curve2);
curvetrunk.attr({
    fill:"#79A3CC"
})

//create circles for tree leaves
var circ1 = s.circle(500, 260, 80);
var circ2 = s.circle(480, 240, 80);
var circ3 = s.circle(500, 220, 80);
var circ4 = s.circle(530, 260, 80);
var circ5 = s.circle(550, 210, 80);
var circ6 = s.circle(570, 240, 80);
var circ7 = s.circle(590, 220, 80);
var circ8 = s.circle(580, 260, 80);
var circ9 = s.circle(600, 240, 80);

//group leaves and make green
var leaves = s.group(circ1, circ2, circ3, circ4, circ5, circ6, circ7, circ8, circ9);
leaves.attr({
	fill: "#004C00"
})

//apples
var apple1 = s.ellipse(450, 240, 15, 17);
var apple2 = s.ellipse(560, 290, 15, 17);
var apple3 = s.ellipse(530, 180, 15, 17);
var apple4 = s.ellipse(610, 220, 15, 17);
var apple5 = s.ellipse(490, 300, 15, 17);
var apple6 = s.ellipse(620, 290, 15, 17);
var apple7 = s.ellipse(520, 240, 15, 17);
var orchard = s.group(apple1, apple2, apple3, apple4, apple5, apple6, apple7);
orchard.attr({
	fill: "#C02F2F"
})

var move = function(dx,dy) {
        this.attr({
                    transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy],
			
                });
}

var start = function() {
    apple1.data('origTransform', this.transform().local );
	apple2.data('origTransform', this.transform().local );
	apple3.data('origTransform', this.transform().local );
	apple4.data('origTransform', this.transform().local );
	apple5.data('origTransform', this.transform().local );
	apple6.data('origTransform', this.transform().local );
	apple7.data('origTransform', this.transform().local );
}
var stop = function() {
        console.log('finished dragging');
}

apple1.drag(move, start, stop );
apple2.drag(move, start, stop );
apple3.drag(move, start, stop );
apple4.drag(move, start, stop );
apple5.drag(move, start, stop );
apple6.drag(move, start, stop );
apple7.drag(move, start, stop );
