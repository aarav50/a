class   g{
    constructor(x,y){
    var options = {
        isStatic:false,
        'restitution':1,
'friction':1,
'density':1
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
this.width=50;
this.height=50;
World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        stroke("yellow");
        rect(0,0,this.width,this.height);
        pop();

    }
}