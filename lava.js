  
class Lava{
    constructor(x,y){
        var options = {
            
            friction: 0.001,
            restitution:0.1         
        }
        this.radius = random(5,15);
        this.lava = Bodies.circle(x,y,this.radius,options)
        World.add(world, this.lava);
    }

    updateY(){     
        if(this.lava.position.y > height){

            Matter.Body.setPosition(this.lava, {x:random(0,400), y:random(0,400)})
            score = score+5;
        }
    }

    display(){
        fill("red")
        strokeWeight(2);
        stroke("orange");
        ellipseMode(CENTER);
        ellipse(this.lava.position.x,this.lava.position.y,this.radius,this.radius);

    }
}