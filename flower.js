//setup drawing surface
var s = Snap(1100, 730);

//set background to blue
var sky = s.rect(0, 0, 1100, 730);
sky.attr({
	fill:"#79A3CC"
})

//create stem and make it green
var stem = s.rect(515, 280, 70, 500);
stem.attr({
	fill:"#518251"
})


//FLOWER\\
//create variables for flower
var i = 1;
var howmany = 5;
var g;

//create flower center
var center = s.circle(550,300,90)
center.attr({
	fill:"#432e13"
});

//create one petal and make it yellow
var petal = s.path('M85,40 C40,60,-80,335,100,300 C100,300,320,330,85 40z');
petal.attr({
  fill:"#FEE5AC",
  class:"petal"
});
//clone and add more petals to the DOM
while(i < howmany){
		petals = petal.clone();
		i++;	
}
//apply a rotation and translation transform to every petal.
var petals = Snap.selectAll(".petal");
Array.prototype.map.call(petals, function(p,ind){
		var tilt, petalAttr = {};
		tilt = ind * (360 / howmany);
	   petalAttr.transform = 'rotate(' + tilt + ') translate(-60,-60)';
		p.attr(petalAttr); 
});
//create a group element and move the petals to it
g = s.g(petals);
g.attr({
	id:"petals", 
	transform:"translate(550,300)"
});
// move the flower center to the top of the element stack by inserting it after the petal group.
g.after(center);


//BEE\\
//create stinger
var stinger = s.polygon(20, 500, 43, 490, 43, 510);

//make bee body and make it yellow
var bod = s.ellipse(100, 500, 60, 45);
bod.attr({
	fill:"#FFCC11", 
	stroke:"#000000"
})

//create two white wings
var wing1 = s.ellipse(90, 445, 8, 12);
var wing2 = s.ellipse(95, 445, 8, 12);
var wings = s.group(wing1, wing2);
wings.attr({
	fill: "#EFEFEF",
	stroke:"#000000", 
})

//make stripes for bee body
var stripe1 = s.rect(67, 460, 10, 80);
var stripe2 = s.rect(100, 455, 10, 90);

//make eyes and mouth for bee
var beereye = s.circle(150, 490, 3, 3);
var beeleye = s.circle(130, 490, 3, 3);
var mouth = s.line(135, 510, 150, 510);
mouth.attr({
	stroke: "#000000",
	strokeWidth: "2",
	strokeLinecap: "round" //make ends of mouth line rounded to reduce harshness. we want and approachable bee
})


//INTERACTIVITY\\
//toggle the color of the flower center when moused over to indicate interactivity
center.mouseover(
	function()
	{
		center.attr({fill: "#70543B"})
	}
)
center.mouseout(
	function(){
		center.attr({fill:"#432e13"})
	}
)

//toggle the color of the stem when moused over to indicate interactivity
stem.mouseover(
	function()
	{
		stem.attr({fill: "#B4D7B4"})
	}
)
stem.mouseout(
	function(){
		stem.attr({fill:"#518251"})
	}
)

//move the bee up and to the right when the center of the flower is clicked
//make it relatively slow and ease to make it more fluid
var flyawaylilbuddy = function(){
	stinger.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	bod.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	wing1.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	wing2.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	stripe1.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	stripe2.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	beereye.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	beeleye.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
	mouth.animate({transform: 'translate(1500, -500)'}, 7500, mina.easein);
}
center.click(flyawaylilbuddy); //add function to .click event handler of the center of the flower

//move the bee back to its original position when the stem is clicked
//ease in and out of animation for smoothness
var comehome = function(){
	stinger.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	bod.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	wing1.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	wing2.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	stripe1.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	stripe2.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	beereye.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	beeleye.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
	mouth.animate({transform: 'translate(0, 0)'}, 7500, mina.easein);
}
stem.click(comehome); //add funciton to event handler
