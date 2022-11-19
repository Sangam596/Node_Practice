//Two way to create an object 
//Factory 
//Constoctur

const objFunction = () => {
    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        draw: function () {
            console.log('draw')
        }
    }
    circle.draw()
}
// objFunction();

//factory function : if the function is returning an object we refer it as factory function
const factoryFunction1 = () => {
    function createCircle(radius) {
        return {
            radius,
            draw: function () {
                console.log(`this`, this);
                console.log(`this.radius`, this.radius);
                console.log(`draw`);
            }
        }
    }
    const circle = createCircle(1)
    circle.draw()
}
// factoryFunction1()

const factoryFunction2 = () => {
    function createCircle(radius) {
        return {
            radius,
            draw: () => {
                console.log(`this`, this);
                console.log(`this.radius`, radius);
                console.log(`draw`);
            }
        }
    }
    const circle = createCircle(1)
    circle.draw()
}
// factoryFunction2()

/*
//constructor function : if we use this keyword with new operator to create an object we refer it as cunstructor function
//Every object in javascript has a constructor property and that references the function that was used to create that object  
function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = () => console.log(`draw`);
}
//console.log(Circle(1));// this will be pointing to global object

const circle = new Circle(1)//creates an empty object, this will point to empty or local object 
console.log(`circle`, circle);
circle.draw();
console.log(`name`, Circle.name);//properties of cunsturctor
console.log(`length`, Circle.length);
console.log(`prototype`, Circle.prototype);
Circle.call({}, 1)
Circle.call(this, 1)
Circle.apply(this, [1])
const propertyName = `center-location`;
circle['center-location'] = { x: 1 };
console.log(`circle`, circle);// we can add properties to existing object
console.log(`circle`, circle['center-location']?.x);// best practice to access the object the properties which are dynamic or not valid identifiers
console.log(`circle`, circle['center-location']['x']);// best practice to access the object the properties which are dynamic or not valid identifiers

for(let key in circle){
    if (typeof circle[key]!=='function')
    console.log(key,circle[key]);
}
console.log(Object.keys(circle));
console.log(Object.entries(circle));
console.log(Object.values(circle));
*/






