//Decorators 
function decoratorsName(abc:Function){
    console.log('hi');
    let data='Encrypted data';
    abc.prototype.save(data);
}

function decoratorsName2(abc:Function){
    console.log('hi 2');
}

@decoratorsName
@decoratorsName2
class Person{
    _name:string;
    constructor(name:string){
        this._name=name;
    }
}

class DataBase5{
    _data:string;
    constructor(data:string){
        this._data=data;
    }
    save(data:string):void{
        console.log(`save${this._data}`);
    }
}
