//setup drawing surface
var s = Snap(1100, 730);

//background 
var sky = s.rect(0, 0, 1100, 730);
sky.attr({
	fill:"#79A3CC"
})

//make trunk
var trunk = s.rect(700, 380, 85, 300);
trunk.attr({
	fill: "#372020"
})

//curve trunk
var curve = s.ellipse(687, 400, 30, 200);
var curve2 = s.ellipse(795, 400, 30, 200);
var curvetrunk = s.group(curve, curve2);
curvetrunk.attr({
    fill:"#79A3CC"
})

//create circles for tree leaves
var circ1 = s.circle(700, 350, 40);
var circ2 = s.circle(680, 330, 40);
var circ3 = s.circle(700, 310, 40);
var circ4 = s.circle(730, 350, 40);
var circ5 = s.circle(750, 300, 40);
var circ6 = s.circle(770, 330, 40);
var circ7 = s.circle(790, 310, 40);
var circ8 = s.circle(780, 350, 40);
var circ9 = s.circle(800, 330, 40);

//group leaves and make green
var leaves = s.group(circ1, circ2, circ3, circ4, circ5, circ6, circ7, circ8, circ9);
leaves.attr({
	fill: "#004C00",
});

//apples
var apple1 = s.ellipse(700, 300, 7, 9);
var apple2 = s.ellipse(680, 360, 7, 9);
var apple3 = s.ellipse(730, 340, 7, 9);
var apple4 = s.ellipse(750, 290, 7, 9);
var apple5 = s.ellipse(780, 350, 7, 9);
var apple6 = s.ellipse(810, 320, 7, 9);
var orchard = s.group(apple1, apple2, apple3, apple4, apple5, apple6);
orchard.attr({
	fill: "#C02F2F"
})



//grass
var grass = s.rect(0, 580, 1100, 30);
grass.attr({
	fill: "#008000"
})

//dirt
var dirt = s.rect(0, 610, 1100, 1000);
dirt.attr({
	fill: "#5D432D"
})

//stems
var stem1 = s.rect(300, 560, 10, 30);
var stem2 = s.rect(550, 560, 10, 30);
var stem3 = s.rect(900, 560, 10, 30);
//group stems
var stems = s.group(stem1, stem2, stem3);
stems.attr({
	fill:"#002600"
})
//petals
//flower1 (most left)
var peta1 = s.ellipse(297, 560, 10, 5);
var peta2 = s.ellipse(305, 550, 5, 10);
var peta3 = s.ellipse(310, 560, 10, 5);
var peta4 = s.ellipse(305, 567, 5, 10);
//flower 2 (center)
var peta5 = s.ellipse(547, 560, 10, 5);
var peta6 = s.ellipse(555, 550, 5, 10);
var peta7 = s.ellipse(560, 560, 10, 5);
var peta8 = s.ellipse(555, 567, 5, 10);
//flower 3 (most right)
var peta9 = s.ellipse(897, 560, 10, 5);
var peta10 = s.ellipse(905, 550, 5, 10);
var peta11 = s.ellipse(910, 560, 10, 5);
var peta12 = s.ellipse(905, 567, 5, 10);
//group petals
var petals = s.group(peta1, peta2, peta3, peta4, peta5, peta6, peta7, peta8, peta9, peta10, peta11, peta12);
petals.attr({
    fill: "#FEE5AC"
})
//centers
var cent1 = s.circle(305, 560, 3);
var cent2 = s.circle(555, 560, 3);
var cent3 = s.circle(905, 560, 3);
var centers = s.group(cent1, cent2, cent3);
centers.attr({
	fill:"#432e13"
})

//worm
var wormbod = s.ellipse(100, 580, 30, 10);
var wormhead = s.circle(130, 575, 10);
var worm = s.group(wormbod, wormhead);
worm.attr({
	fill:"#8B6743"
})
var wormeye = s.circle(135, 575, 2);
wormeye.attr({
	fill:"000000"
})

//hat
var brim = s.rect(120, 563, 20, 5);
var hattop = s.rect(125, 555, 10, 10);
var hat = s.group(hattop, brim);
hat.attr({
	fill: "#000000"
})


//word and link clouds
var puff1 = s.circle(100, 100, 40);
var puff2 = s.circle(140, 120, 40);
var puff3 = s.circle(180, 110, 40);
var puff4 = s.circle(150, 80, 40);

var puffa = s.circle(500, 100, 50);
var puffb = s.circle(550, 180, 50);
var puffc = s.circle(490, 150, 50);
var puffd = s.circle(570, 100, 50);
var puffe = s.circle(590, 160, 50);
var clouds = s.group(puff1, puff2, puff3, puff4, puffa, puffb, puffc, puffd, puffe);
clouds.attr({
	fill:"#FFFFFF"
})

//title for documentation
var doc = s.text(490, 145, "documentation");




//new page functions\\
//tree
var treeClicked = function(){
    window.location.href = "tree.html";
}
leaves.click(treeClicked);
trunk.click(treeClicked);
orchard.click(treeClicked);
//worm
var wormclicked = function(){
    window.location.href = "worm.html";
}
worm.click(wormclicked);
dirt.click(wormclicked);
//flower
var flowerclicked = function(){
    window.location.href = "flower.html";
}
stems.click(flowerclicked);
petals.click(flowerclicked);
centers.click(flowerclicked);
//clouds
var todoc = function(){
	window.location.href = "documentation.html";
}
clouds.click(todoc);