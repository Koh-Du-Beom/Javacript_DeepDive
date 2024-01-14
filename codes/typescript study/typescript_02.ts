//primitive type
let age: number;
age = 12;

let userName : string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// more complex types

let hobbies: string[];
hobbies = ['sports', 'cooking'];

type Person = {
  name : string;
  age : number;
};

let person : Person;
person = {
  name : 'kim',
  age : 22,
}

let people: {
  name: string;
  age : number;
}[];

//Type interfence
let course : string | number = 'React - The complete guide'
course = 12341;

//Functinos & types
function add(a: number, b:number) : number{
  return a + b;
}

function printOutput(value : any): void{
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');