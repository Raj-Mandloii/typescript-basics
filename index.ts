// Type

let x = 10;

// or
let y: number = 10;

// Enum
const enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

// void => when a function does not return any thing
// Ex
function sum(a: number, b: number): void {
  console.log(a + b);
}
sum(10, 14); // this is return nothing hence void.

// we can also use null and undefined as type
let u: undefined = undefined;
let n: null = null;

// type any is also available but we should avoid using it as it
// block typescript typesafety
//Ex
let value: any;
value = 5;
value = "String";

//Objects ==>

// Interface ->
// it is a kind of prototype we predefine all the type for given Objects.
// we can use ? to declare optional props ----> "?"

interface ButtonProps {
  label: string;
  color: string;
  size: number;
}

let obj: ButtonProps;

obj = { label: "Click", color: "Red", size: 12 };

// fn
function add(x: number, y: number): number {
  return x + y;
}
// anonymous ->
let z = function (a: number, b: number): number {
  return a + b;
};

// Arrow Fn
let b = (a: number, b: number): number => {
  return a + b;
};

//Objects functions
// Interface along with functions ---> 

interface Person {
  firstName: string;
  lastName: string;
}
function printFullName({ firstName, lastName }: Person): string {
  return firstName + " " + lastName;
}


// in case of default value --> 

function printFullName2({ firstName, lastName = "School" }: Person): string {
  return firstName + " " + lastName;
}



// Union type --> 

let userType : "super-admin" | "admin" | "user";

// now we can assign any of the value to useType 

userType = "admin";

// we can create our own types 


type RequestLoading = {
    state : "loading"
}


type RequestFailed = {
    state : "failed",
    code: number
}


type RequestSuccess = {
    state: "success",
    response: {
        title: string,
        status: boolean,
        id: string,
        data: Array<string>,


    }
}
type NetworkRequest = RequestLoading | RequestSuccess | RequestFailed;



// Intersection type 

interface Errorinterface {
    status: boolean;
    error? : {
        message: string
    }
}

