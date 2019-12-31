var tree = [];
var count = 0;
var leaves = [];
const maxLeafG = 7; 
var interval; 

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
 	var a = createVector(width/2, height);
	var b = createVector(width/2, height*0.75);
	var root = new Branch(a,b);
	tree[0] = root;
	tree[0].finished = false;
	interval = setInterval(drawTree, 300);
}

function drawTree(){
	if(count < maxLeafG){
		for(var i=tree.length-1; i>=0; i--){
			if(!tree[i].finished){
				tree.push(tree[i].branchA());
				tree.push(tree[i].branchB());
				tree[i].finished = true;
			}

		}

	}
	
	count++;
	
	if(count == maxLeafG){
		for(var i = 0; i < tree.length; i++){
			if(!tree[i].finished){
				var leaf = tree[i].end.copy();
				leaves.push(leaf);
			}
		}
	}
	
}

function draw() {
  	// put drawing code here
  	background(51); // 51 - dark grey
  	for(var i=0; i < tree.length; i++){
  		tree[i].show();
  		//tree[i].jitter();
  	} 
  	var totalDropped = 0;

  	for(var i=0; i < leaves.length; i++){
  		fill(250, 0, 100, 100);
  		noStroke();
  		ellipse(leaves[i].x, leaves[i].y, height/60, height/60);
  		if(leaves[i].y < height-5){
  			leaves[i].y += random(0, 3);
  			leaves[i].x += random(0, 1);
  		}else{
  			totalDropped++;
  		}
  		if(totalDropped == leaves.length){
  			setTimeout(refresh, 1000);
  		}
  	} 
}

function refresh(){
	tree.length = 0;
	leaves.length = 0;
	count = 0;
	//tree[0].finished = false;
	clearInterval(interval);
	setup();
}