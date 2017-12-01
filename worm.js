//setup drawing surface
var s = Snap(1100, 730);

//background 
var sky = s.rect(0, 0, 1100, 730);
sky.attr({
	fill:"#79A3CC"
})

//grass
var grass = s.rect(0, 30, 1100, 30);
grass.attr({
	fill: "#008000"
})

//dirt
var dirt = s.rect(0, 60, 1100, 1000);
dirt.attr({
	fill: "#5D432D"
})

var tun1 = s.rect(50, 60, 90, 150);
var tun2 = s.rect(50, 165, 288, 93);
var tun3 = s.rect(150, 240, 90, 225);
var tun4 = s.rect(60, 330, 100, 100);
var tun5 = s.rect(0, 430, 160, 100);
var tun6 = s.rect(630, 70, 100, 300);
var tun7 = s.rect(518, 268, 100, 300);
var tun8 = s.rect(518, 568, 300, 100);
var tun9 = s.rect(810, 540, 100, 128);
var tun10 = s.rect(810, 440, 300, 100);
var tun11 = s.rect(350, 250, 100, 500);
var tun12 = s.rect(50, 600, 300, 100);
var tun13 = s.rect(50, 700, 100, 30);
var tun14 = s.rect(600, 261, 500, 100);
tun3.attr({
	transform: "rotate(50, 250, 300)"
})
tun6.attr({
	transform: "rotate(290, 600, 400)"
})
var tunnel = s.group(tun1, tun2, tun3, tun4, tun5, tun6, tun7, tun8, tun9, tun10, tun11, tun12, tun13, tun14);
tunnel.attr({
	fill:"#A57F5D"
})

var stem = s.rect(700, 0, 100, 50);
stem.attr({
	fill: "#002600"
})

////worm
//var wormbod = s.ellipse(100, 580, 30, 10);
//var wormhead = s.circle(130, 575, 10);
//var worm = s.group(wormbod, wormhead);
//worm.attr({
//	fill:"#8B6743"
//})
//var wormeye = s.circle(135, 575, 2);
//wormeye.attr({
//	fill:"000000"
//})
//
////hat
//var brim = s.rect(120, 563, 20, 5);
//var hattop = s.rect(125, 555, 10, 10);
//var hat = s.group(hattop, brim);
//hat.attr({
//	fill: "#000000"
//})

