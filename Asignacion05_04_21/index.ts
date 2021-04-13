//Abstract class 
abstract class Employee {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    abstract getSalary(): number;

    getDetails(): string {
        return `Name: ${this.name} id: ${this.id}`;
    }
}

class Developer extends Employee {
    getSalary() {
        return 7000;
    }
}
//You can not create an object from an abstract class

let tom = new Developer('tom', 1);


//----------------------------------
//Interface

interface IEmployee1 {
    name: string;
    id: string;
    getDetails(): string;
}
class Employee1 implements IEmployee1 {
    name: string;
    id: string;
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }
    getDetails(): string {
        return `Name: ${this.name} id: ${this.id}`;
    }

}

let epm1 = new Employee1('Mark', 'sh2');

interface IEmployeeNew extends IEmployee1 {
    age: number;
}

//----------------------------------

//1.- Create an interface for encryptor
//2.- Create an Encryptor base class
//3.- Create concrete/specializad class 
interface Encryptor {
    doEncrypt(data: string): string;
    doDecrypt(data: string): string;
}

class SymetricEncryption implements Encryptor {
    constructor() { }
    doEncrypt(data: string): string {
        return data;
    }
    doDecrypt(data: string): string {
        return data;
    }
}
class ASymetricEncryption implements Encryptor {
    constructor() { }
    doEncrypt(data: string): string {
        return data;
    }
    doDecrypt(data: string): string {
        return data;
    }
}
//usage
let enc = new SymetricEncryption();
let result = enc.doEncrypt('Hello!!')
console.log(result)