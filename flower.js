//setup drawing surface
var s = Snap(1100, 730);

//background 
var sky = s.rect(0, 0, 1100, 730);
sky.attr({
	fill:"#79A3CC"
})

//stems
var stem1 = s.rect(515, 280, 70, 500);

//group stems
stem1.attr({
	fill:"#518251"
})

//petals and center
var center;
var petal;
var petals;
var i = 1;
var howmany = 5;
var g;

center = s.circle(550,300,90)
center.attr({
	fill:"#432e13"
});
petal = s.path('M85,40 C40,60,-80,335,100,300 C100,300,320,330,85 40z');

petal.attr({
  fill:"#FEE5AC",
  class:"petal"
});

//Clone and add more petals to the DOM
while(i < howmany){
		petals = petal.clone();
		i++;	
}
//Apply a rotation and translation transform to every petal.
petals = Snap.selectAll(".petal");
Array.prototype.map.call(petals, function(p,ind){
		var tilt, petalAttr = {};
		tilt = ind * (360 / howmany);
	   petalAttr.transform = 'rotate(' + tilt + ') translate(-60,-60)';
		p.attr(petalAttr); 
});
//Create a group element and move the petals to it
g = s.g(petals);
g.attr({
	id:"petals", 
	transform:"translate(550,300)"
});
// Move the flower center to the top of the element stack by inserting it after the petal group.
g.after(center);





//bee\\
var stinger = s.polygon(20, 500, 43, 490, 43, 510);

var bod = s.ellipse(100, 500, 60, 45);
bod.attr({
	fill:"#FFCC11", 
	stroke:"#000000"
})
//wings
var wing1 = s.ellipse(90, 445, 8, 12);
var wing2 = s.ellipse(95, 445, 8, 12);
var wings = s.group(wing1, wing2);
wings.attr({
	fill: "#EFEFEF",
	stroke:"#000000", 
})

var stripe1 = s.rect(67, 460, 10, 80);
var stripe2 = s.rect(100, 455, 10, 90);

var beereye = s.circle(150, 490, 3, 3);
var beeleye = s.circle(130, 490, 3, 3);
var mouth = s.line(135, 510, 150, 510);
mouth.attr({
	stroke: "#000000",
	strokeWidth: "2",
	strokeLinecap: "round"
})

bod.mouseover(
	function()
	{
		console.log("over bee");
		wing1.transform("t10, 0");
		wing2.transform("t10, 0");
	}
)