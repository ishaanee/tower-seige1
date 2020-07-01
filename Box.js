class Box{
    constructor(x, y, width, height,visible) {
        var options = {
            'restitution':0.8,
            
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height,visible, options);
        this.width = width;
        this.height = height;
        this.visible=3
        this.image = loadImage("bird.png");
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
        /*if (this.body.speed<3){
          this.body.display()
        }
        else {
          World.remove(world, this.body)
          tint(0, 153, 204);*/
        }
      }
    
    
