class Paper {
    constructor(x,y,r) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.image=loadImage("paper.png");

        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body)
    }
    
    display() {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r);
        fill("brown");
        pop();


    }

}