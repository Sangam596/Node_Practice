//X and Y are independed because those are referncing to defferent memory
//premitives are copied by value
const premitiveFn =()=>{
    let x =10;
let y=x;
 x=40;
 console.log(x);
 console.log(y);
}
// premitiveFn();

//X and Y are depended because those are referncing to same memory
//Non-premitives or objects or refernceTypes are copied by reference
const nonPremitiveFn =()=>{
    let x = {value:10};
let y=x;
 x.value=40;
 console.log(x);
 console.log(y);
}
// nonPremitiveFn();




//Examples
/*
let count=10;
const increase = count => count++;
increase(count);
console.log(count);


let count1={value:10};
const increase1 = obj => obj.value++;
increase1(count1);
console.log(count1);*/

