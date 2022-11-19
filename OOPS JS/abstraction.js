function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.defaultLocation ={x:10,y:15};
    this.computeOptimumLocation=()=>this.defaultLocation.x+this.defaultLocation.y;
    this.draw = () => {
        computeOptimumLocation(this.defaultLocation);
        console.log(`draw`)};
}

const circle = new Circle(1);
console.log(circle);
console.log(circle.computeOptimumLocation());



//Above Function is exposed outside in order to make it's only functionility to be exposed we nedd to implement abstraction
//abstraction means hiding the implementaion and showing/exposing only functionility
//abstraction means hiding the deatials and showing/exposing only essentials

// function Circle(radius) {
//     let color ='red';//local variable it will not be in object or it is the way of creating the private variable
//     console.log(this);
//     this.radius = radius;
//     let defaultLocation ={x:10,y:15};
//     this.computeOptimumLocation=()=>this.defaultLocation.x+this.defaultLocation.y;
//     this.draw = () => console.log(`draw`);
// }

// const circle = new Circle(1);
// console.log(circle);
// console.log(circle.computeOptimumLocation());


