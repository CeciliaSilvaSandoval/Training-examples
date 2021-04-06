"use strict";
//Encryptor cluster
var SymetricEncryption = /** @class */ (function () {
    function SymetricEncryption() {
    }
    SymetricEncryption.prototype.doEncrypt = function (data) {
        return "xyz" + data;
    };
    SymetricEncryption.prototype.doDecrypt = function (data) {
        return data.slice(3);
    };
    return SymetricEncryption;
}());
var ASymetricEncryption = /** @class */ (function () {
    function ASymetricEncryption() {
    }
    ASymetricEncryption.prototype.doEncrypt = function (data) {
        return "abc" + data;
    };
    ASymetricEncryption.prototype.doDecrypt = function (data) {
        return data.slice(3);
    };
    return ASymetricEncryption;
}());
var CrazyEncryption = /** @class */ (function () {
    function CrazyEncryption() {
    }
    CrazyEncryption.prototype.doEncrypt = function (data) {
        return "---" + data;
    };
    CrazyEncryption.prototype.doDecrypt = function (data) {
        return data.slice(3);
    };
    return CrazyEncryption;
}());
//usage
var enc = new SymetricEncryption();
var result = enc.doEncrypt('Hello!!');
console.log(result);
//percistence 
var oracle = /** @class */ (function () {
    function oracle(enObj) {
        this._enObj = enObj;
    }
    oracle.prototype.save = function (data) {
        var encryptedData = this._enObj.doEncrypt(data);
        //save encryptedData to DB
    };
    return oracle;
}());
//USE ORACLE TO SAVE DATA 
//Read a config file & get what encryption is used
var dbObj = new oracle(new CrazyEncryption());
dbObj.save('Hello');
function greet(xyz) {
    console.log("hello " + xyz.name);
}
var persona = {
    name: 'ceci'
};
greet(persona);
