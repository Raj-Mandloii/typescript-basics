// Type 

let x = 10;

// or 
let y:number = 10;

// Enum 
const enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

// void => when a function does not return any thing 
// Ex
function sum(a:number,b:number): void {
    console.log(a+b)
}
sum(10,14) // this is return nothing hence void.

// we can also use null and undefined as type
let u:undefined = undefined
let n:null = null

// type any is also available but we should avoid using it as it 
// block typescript typesafety



