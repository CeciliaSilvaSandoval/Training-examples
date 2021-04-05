//Abstract class 
abstract class Employee {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    abstract getSalary() :number;

    getDetails():string{
        return `Name: ${this.name} id: ${this.id}`;
    }
}

class Developer extends Employee{
    getSalary(){
        return 7000;
    }
}
//You can not create an object from an abstract class

let tom=new Developer('tom',1);


//----------------------------------
//Interface

interface  IEmployee{
    name:string;
    id: string;
    getDetails():string;
}
class Employee1 implements IEmployee{
    name:string;
    id:string;
    constructor(name:string,id:string){
        this.name=name;
        this.id=id;
    }
    getDetails():string{
        return `Name: ${this.name} id: ${this.id}`;
    }

}

let epm1 = new Employee1 ('Mark','sh2');

interface IEmployeeNew extends Employee1{
    age:number;
}

//----------------------------------

//1.- Create an interface for encrypt
//1.- Create an Encryptor class
class Encryptor {
    doEncrypt(data:string):string{
        return data;
    }
    doDecrypt(data:string):string{
        return data;
    }
}

class SymetricEncryption{

}
class ASymetricEncryption{
    
}
//usage
let enc = new SymetricEncryption();
//let result =enc.encrypt('Hello!!')