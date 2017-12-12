//setup drawing surface
var s = Snap(1100, 730);

//make the background blue
var sky = s.rect(0, 0, 1100, 730);
sky.attr({
	fill:"#79A3CC"
})

//make a rectangle to act as grass and make it green
var grass = s.rect(0, 30, 1100, 30);
grass.attr({
	fill: "#008000"
})

//make a brown rectangle to symbolize dirt
var dirt = s.rect(0, 60, 1100, 1000);
dirt.attr({
	fill: "#5D432D"
})


//TUNNELS\\
//make the rectangles that act as the tunnels under ground
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
//rotate tunnels 3 and 6 on angles for interigue
tun3.attr({
	transform: "rotate(50, 250, 300)"
})
tun6.attr({
	transform: "rotate(290, 600, 400)"
})
//group tunnels to make them light brown
var tunnel = s.group(tun1, tun2, tun3, tun4, tun5, tun6, tun7, tun8, tun9, tun10, tun11, tun12, tun13, tun14);
tunnel.attr({
	fill:"#A57F5D"
})

//make stem of flower and color green
var stem = s.rect(700, 0, 100, 50);
stem.attr({
	fill: "#002600"
})


//WORM\\
//make worm body and head, make them brown
var wormbod = s.ellipse(734, 336, 100, 25);
var wormhead = s.circle(830, 318, 25);
var worm = s.group(wormbod, wormhead);
worm.attr({
	fill:"#6D492B"
})
//make eye of worm and tophat for cuteness
var wormeye = s.circle(844, 314, 4);
var brim = s.rect(805, 290, 50, 10);
var hattop = s.rect(815, 270, 30, 20);


//INTERACTIVITY\\
//toggle the color of the stem when moused over to indicate interactivity
stem.mouseover(
	function()
	{
		stem.attr({fill: "#B4D7B4"})
	}
)
stem.mouseout(
	function(){
		stem.attr({fill:"#002600"})
	}
)

//toggle the color of the worm when moused over to indicate interactivity
wormbod.mouseover(
	function(){
		wormbod.attr({fill:"#766251"})
		wormhead.attr({fill:"#766251"})
	}
)
wormbod.mouseout(
	function(){
		wormbod.attr({fill:"#6D492B"})
		wormhead.attr({fill:"#6D492B"})
	}
)

//make worm move straight across the screen when any part of worm is clicked
var wiggleworm = function(){
    wormbod.animate({transform: 'translate(470, 0)'}, 8500, mina.easein);
    wormhead.animate({transform: 'translate(470, 0)'}, 8500, mina.easein);
    wormeye.animate({transform: 'translate(470, 0)'}, 8500, mina.easein);
    brim.animate({transform: 'translate(470, 0)'}, 8500, mina.easein);
    hattop.animate({transform: 'translate(470, 0)'}, 8500, mina.easein);
}
//add function to event handlers
wormbod.click(wiggleworm);
wormeye.click(wiggleworm);
wormhead.click(wiggleworm);
brim.click(wiggleworm);
hattop.click(wiggleworm);

//make worm move backwards to his original spot when stem clicked
//back up faster than moved out
var backitup = function(){
    wormbod.animate({transform: 'translate(0, 0)'}, 1500, mina.easein);
    wormhead.animate({transform: 'translate(0, 0)'}, 1500, mina.easein);
    wormeye.animate({transform: 'translate(0, 0)'}, 1500, mina.easein);
    brim.animate({transform: 'translate(0, 0)'}, 1500, mina.easein);
    hattop.animate({transform: 'translate(0, 0)'}, 1500, mina.easein);
}
stem.click(backitup); //add function to event handler
