class stone {
    constructor(x,y){
      this.image = loadImage("sprites/Stone.png");
      this.trajectory = [];
    }
  
    display() {
  
      super.display();
      if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x, this.body.position.y];
      }
    }
  }
  