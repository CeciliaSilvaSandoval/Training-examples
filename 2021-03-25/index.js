//Client side - Sending data( json format) to backend
let employe={
    name:'Cecilia',
    age:24,
    account:'55234',
    departaments:['Software']
};

let json=JSON.stringify(employe)
console.log(json)
//Client side - Processing data( json format) recived from backend

let backendjson='{"name":"Cecilia","age":24,"code":55234}';
let backendemploye =JSON.parse(backendjson);
console.log(backendemploye)