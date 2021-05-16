
//Encryptor cluster

interface Encryptor {
    doEncrypt(data: string): string;
    doDecrypt(data: string): string;
}

class SymetricEncryption implements Encryptor {
    constructor() { }
    doEncrypt(data: string): string {
        return `xyz${data}`;
    }
    doDecrypt(data: string): string {
        return data.slice(3);
    }
}
class ASymetricEncryption implements Encryptor {
    constructor() { }
    doEncrypt(data: string): string {
        return `abc${data}`;
    }
    doDecrypt(data: string): string {
        return data.slice(3);
    }
}
class CrazyEncryption implements Encryptor {
    constructor() { }
    doEncrypt(data: string): string {
        return `---${data}`;
    }
    doDecrypt(data: string): string {
        return data.slice(3);
    }
}
//usage
let enc = new SymetricEncryption();
let result = enc.doEncrypt('Hello!!')
console.log(result)

//percistence 
class oracle{
    _enObj: Encryptor;

    constructor(enObj: Encryptor) {
        this._enObj = enObj;
    }

    save(data:string): void {    
        let encryptedData=this._enObj.doEncrypt(data);
        //save encryptedData to DB
    }
}

//USE ORACLE TO SAVE DATA 
//Read a config file & get what encryption is used
let dbObj =new oracle(new CrazyEncryption());
dbObj.save('Hello');


//-------------------------------

//Interface functions

interface Person{
    name:String;
}
function greet(xyz:Person){
    console.log(`hello ${xyz.name}`);
}

let persona={name:'ceci'}
greet(persona);