class Human1 {
    constructor(x,y){
      this.image = loadImage("sprites/Boy.png");
      this.trajectory = [];
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;

    }
  }
  