//object literal
const obj = {
    name: "steve",
    age: 23,
    printAge: function () {
        console.log('age....');
    }
}
obj.printAge();

//Class
//template /blueprint
class person {
    //Atributes 
    //private:visible para todos
    //protected:visible en herencia
    //private:no visible
    //constructor
    public name: string;
    private age: number;
    protected type: string;
    //atributes
    constructor(name: string, age: number) {
        //run code when template placed in ram
        //initializing
        this.name = name;
        this.age = age;
        this.type = 'Person';

    }
    //metods
    public printAge() {
        console.log('age....');
    }
}

//Using the template blueprint
const john = new person('steve', 23);
john.printAge();

class student extends person {
    public major: string = ''
    constructor(major: string, name: string, age: number) {
        super(name, age);//trae el constructor de donde extiende 
        this.major = major
    }

}
const mike = new student('Mike', 'nath', 23);

//gettings and settings
class person1 {
    public name: string = '';
    public _age: number = 0;
    get age() {
        return this._age;
    }
    set age(value: number) {
        if (value > 150) {
            console.log("Please give a valid age");
            return;
        }
        this._age = value;
    }
}

let objeto = new person1();
objeto.name = 'steve';
objeto.age = 21;
console.log(objeto);



//static 
class helper {
    static pi_number: number = 3.14;
    static calculateCircunference(dia: number) {
        return helper.pi_number * dia;
    }
    saveToDB(objeto: person1) {
        //saves the adaptor
    }
}

let obj4 = helper.calculateCircunference(12)
let obj5 = new helper();

