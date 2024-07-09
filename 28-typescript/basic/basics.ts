// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12.1;

let userName: string;

userName = 'Christian';

let isStudent: boolean;

isStudent = true;

// More complex types

let hobbies: string[];

hobbies = ['Music', 'Arson', 'Money Laundering'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Christian',
    age: 32
}

// person = {
//     isEmployee: true
// }

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12345;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function printoutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')