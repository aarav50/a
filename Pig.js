class Pig{
constructor(x,y){
    var options ={
        isStatic:false,
        'restitution':2,
        'friction':10,
        'density':1

    }
    this.body = Bodies.rectangle(x,y,100,100,options);
    this.width=100;
    this.height=100;
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("#00ffff");
strokeWeight(10);
stroke("#000000");
rect(0,0,this.width,this.height);
pop();

}
}