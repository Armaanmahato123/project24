class Ball{
    constructor(x,y,radius){
        var options ={
            isStatic: false,
            restitution: 0.2,
            friction: 0.5,
            density: 1.3
    
        }
        this.x = x;
        this.y = y;
        this.radius = radius
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
      var position = this.body.position;
      push();
      translate(position.x, position.y);
      fill("green");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius);
      pop();  
    }
}