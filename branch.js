function Branch(begin, end){
	this.begin = begin;
	this.end = end;
	this.finished = false;
	this.show = function(){
		let len = Math.sqrt(Math.pow((this.end.x - this.begin.x), 2) + Math.pow((this.end.y - this.begin.y), 2));
		strokeWeight(len*0.08);
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	this.jitter = function(){
		this.end.x += random(-1, 1);
		this.end.y += random(-1, 1);
	}

	this.branchA = function() {
		var angle = random(3, 12);
		var len = random(0.5, 0.8);
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI / angle);
		dir.mult(len);
		var newEnd = p5.Vector.add(this.end, dir);
		var b = new Branch(this.end, newEnd);
		return b;
	}

	this.branchB = function() {
		var angle = random(3, 12);
		var len = random(0.5, 0.8);
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-PI / angle);
		dir.mult(len);
		var newEnd = p5.Vector.add(this.end, dir);
		var b = new Branch(this.end, newEnd);
		return b;
	}
}