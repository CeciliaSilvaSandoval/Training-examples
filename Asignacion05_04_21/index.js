"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abstract class 
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.getDetails = function () {
        return "Name: " + this.name + " id: " + this.id;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.getSalary = function () {
        return 7000;
    };
    return Developer;
}(Employee));
//You can not create an object from an abstract class
var tom = new Developer('tom', 1);
var Employee1 = /** @class */ (function () {
    function Employee1(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee1.prototype.getDetails = function () {
        return "Name: " + this.name + " id: " + this.id;
    };
    return Employee1;
}());
var epm1 = new Employee1('Mark', 'sh2');
var SymetricEncryption = /** @class */ (function () {
    function SymetricEncryption() {
    }
    SymetricEncryption.prototype.doEncrypt = function (data) {
        return data;
    };
    SymetricEncryption.prototype.doDecrypt = function (data) {
        return data;
    };
    return SymetricEncryption;
}());
var ASymetricEncryption = /** @class */ (function () {
    function ASymetricEncryption() {
    }
    ASymetricEncryption.prototype.doEncrypt = function (data) {
        return data;
    };
    ASymetricEncryption.prototype.doDecrypt = function (data) {
        return data;
    };
    return ASymetricEncryption;
}());
//usage
var enc = new SymetricEncryption();
var result = enc.doEncrypt('Hello!!');
