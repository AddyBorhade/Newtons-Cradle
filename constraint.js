class Rope{
    constructor(bodyA,pointB){
        var options = {
            stiffness: 0.04,
            length: 400,
            bodyA:bodyA,
            pointB:pointB 
        }


        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }

display(){
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)

}






}