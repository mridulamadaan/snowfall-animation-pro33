class Snow{
    constructor(x,y){
        var opt = {
        friction:0.3,
        density:0.01,
        }
        this.snowFlake = loadImage("snow5.webp");
        this.body = Bodies.rectangle(x,y,50,50,opt);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        image(this.snowFlake, pos.x, pos.y,50,50 );
    }



}