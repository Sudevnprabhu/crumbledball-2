class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}



/*class Paper {
    constructor(x,y,r) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction':0,
          'density':1.2 
      }
      this.x=x;
      this.y=y;
      this.r=r
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(this.x,this.y,(this.r-20/2),options);
      World.add(world, this.body);
    }
    
    display(){
      var paperpos =this.body.position;
      
     // Push()
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER)
      fill("purple");
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
     // pop()

    }
  }*/

 


/*class BaseClass{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}*/