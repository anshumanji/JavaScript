const score = 100 //Number
const scorefloat = 10.3 //NUmber

const outSideTemp = null

// symbol
const id = Symbol("123")
const EmpId = Symbol("123")

console.log(id === EmpId); // symbol always return unique

let s = Symbol('+')
let b = Symbol('+')
console.log(s==b) //op false because symbol assign unique value

//all primitive dt are call by value
// non-primitive are call by reference


// #Non-Primitive DT
const arr = ["Hello", "1", "ram"]
console.log(arr)
console.log(typeof arr)


//2.objects 
// object are keyvalue piar
let myobj= {
    name: "Anshu",
    age : 20
}
console.log(myobj)
console.log(typeof myobj)

// const myfunction  = function(){
//     console.log("Hello World");
// }

// console.log(myfunction);

