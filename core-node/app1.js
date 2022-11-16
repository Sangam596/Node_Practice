function sayHello(str){
    console.log(str);
}

sayHello('hi');

console.log(global)

var msg =`hi`;
console.log(global.msg);//undefined
console.log(global.sayHello);//undefined
console.log(module);
console.log(module);