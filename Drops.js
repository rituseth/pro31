class Drops {
    constructor(x,y,r){
    var options = {
        isStatic :false,
        restitution:0.1,
        friction:0.1,
        density:1.2
     
    }

     this.x=x;
     this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y, this.r/2, options) 
   
    World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var maxDrops=100;
        
        translate(pos.x,pos.y)
       rectMode(CENTER)
        rect(100,10, this.r, this.r )
        for(var i=0 ;i<maxDrops; i++){
            this.body.push(new this.body (random(0,400),random(0,400)))}
        
       pop();
        
     
    }
}
