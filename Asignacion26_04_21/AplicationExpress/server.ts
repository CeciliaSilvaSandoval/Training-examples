import express from 'express';

//Creating an express object
const server = express();
const port = 3080;
//El programa cacha cualquier peticion y hay algo llamado middleware
//Se puede adjuntar algo en medio del programa y correr un poco de codigo antes de ir a los endpoints
//necesito har log y no puedo hacerlo en todos los enpoints, hay un punto donde el request va a ir al 
//middleware, se registre y luego vaya a su respectivo endpoint.
/*  Loggin Middleware */
//Esto sera llamado cada vez que venga el request, aqui se puede checar de virus o cosas asi y lo importante es que se haga antes de entrar al endpoint
//Se tratade poder hace un buen filtrado, puedes tener varios middlewares
server.use((req, res, next) => {
    //Muestra el metodo y el path que se ocupa
    console.log(`${req.method} ${req.path}`);
    next();//Si deseas continuar con lo demas o no 
});

//Creating an endpoint, and callback function that is the response 
server.get('/', (req, res) => {
    //El equivalente a end en nodeJS
    res.send('Hello world from express');
});
//Other endpont
server.get('/info', (req, res) => {
    res.send('Info from express');
});

//Esta funcion es igual al node , pero solo nos pide el puerto y una funcion callback 
server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});