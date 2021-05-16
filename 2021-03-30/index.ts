// console.log("Hello World!");

//Primitive Types
// let myName = 'Steve';
// myName = 'Tom';
// console.log(myName);

//Primitive Types
let myName: string = 'Steve';
let myAge: number = 21;
let hasJob: boolean = true;
let color: any = 'white';

// Reference Types
let myHobbies: string[] = ['cooking','baseball'];

// Tuple
let myAddress: [string, number] = ['Park street', 23];

// Enum
enum Color {
    Grey,
    Green = 100,
    Red
}

let myColor: Color = Color.Red;

//Function
// function sayHello( name: string ){
//     console.log(name);
// }
// sayHello("hola");

function sayHello( name: string ): string{
    return 'Hello $(name)';
    // console.log('Hello');
}
let result: string = sayHello('Steve');

function print( ):void{
    console.log('Printing...');
}
print();

function multiply( num1: number, num2: number ):number{
    return num1 * num2;
}
multiply(12,13);

function PrintMe(data:string):string{
    return 'Hello $(data)';
}

//Funtion type
let greetings: (a: string) => string;
greetings = sayHello;
greetings ('Steve');
// greetings = PrintMe;

// Object 
let user ={
    name: 'Steve',
    age:21,
    hobbies:['cooking','baseball'],
    print :function(data:string):void{
        console.log(data);
    }
}

let userData:{name: string, age:number,hobbies: string[],print: (x:string)=>void};
userData = user;

//or 

let user2:Complex ={
    name: 'Steve',
    age:21,
    hobbies:['cooking','baseball'],
    print :function(data:string):void{
        console.log(data);
    }
}

type Complex={name: string, age:number,hobbies: string[],print: (x:string)=>void};

var userData2:Complex;
userData2 =user2;

console.log("Hola")