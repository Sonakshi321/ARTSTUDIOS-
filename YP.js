/*class YP{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':4.0,
            'density':4.0
           // 'IsStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height,{restitution:0.005,isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/pencil.png");
        this.markImage = loadImage("Images/yp.png");
        this.trajectory=[];

        World.add(world, this.body);
      }

      display(){
        
        if(keyCode === 68 &&  89 && this.body.velocity.x < 10 && this.body.position.x > 10){
          this.x=mouseX;
          this.y=mouseY;
          var position = [mouseX,mouseY];
          this.trajectory.push(position);
        }
      
        for(var i=0; i<this.trajectory.length; i++){
          image(this.markImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
        
      }
    */