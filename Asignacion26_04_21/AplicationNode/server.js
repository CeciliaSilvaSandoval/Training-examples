//Modulo de node js
const http =require('http')
//Creando dos variables para guardar el domain name y el puerto
const hostname= '127.0.0.1';
const poort =3000;
//Creando el servidor 
// http.createServer([options][, requestListener])
const server=http.createServer((req,res)=>{
    //Creando un response 
    res.statusCode=200;//Im saying all its ok 
    res.setHeader(`Content-Type`,`text/plain`);//headers
    res.end('Hello World');//The body 

});
server.listen(poort,hostname,()=>{
    //Muestra algo si es correcto que el servidor esta en escucha 
    console.log(`Server Running at http://${hostname}:${poort}`);
});