//normal functions  
function print():void{
    console.log("printing...");
}

//function expression 
let addNUmber= function (num1:number,num2:number):number{
    return num1 +num2;
}
addNUmber(1,2);

//arrow function 
let multiplyNumbers=(num1:number,num2:number):number =>{
    return num1*num2;
}

//One single line 
let multiplyNumbersLine=(num1:number,num2:number):number => num1*num2;

//---------------------------------------
//Spread Operator (Arrays & objects)

const numbers: number[]=[2,3,4,5];
const numberDup:number[]=[...numbers];

type mytype={name:string,age:number};

const object:{name:string,age:number}={name:'ceci',age:21};
const objectDup:{name:string,age:number}={...object};

function save(obj:mytype){
    //mutate or modify
    obj.name='tom';
    //save obj to db
}

save({...object});

//Destructuring Operator (arrays & objects)
const myhobbie2:string[]=['baseball','cooking'];
//const hobby0= myhobbie2[0];
//const hobby1= myhobbie2[1];
const [hobby0,hobby1]=myhobbie2;

const userData2:mytype={name:'ceci',age:21};
//const userName= userData2.name;
//const userAge=userData2.age;
const {age:userAge,name:userName}=userData2


//---------------------------------------
//Template literals ( string)
let userName3="steve";
let greeting = 'Hello'+userName3;
let greeting2= `Hello ${userName3}, i am cool !!`;
console.log(greeting2);