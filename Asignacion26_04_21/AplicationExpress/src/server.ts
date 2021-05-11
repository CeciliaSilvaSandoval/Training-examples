import express from 'express';
import postRouter_v1 from './routes/posts'
import postRouter_v2 from './routes/posts2'
import userRouter from './routes/users'
const server = express();
const port = 3001;

/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//register routes
server.use('v1/posts',postRouter_v1);
//versiones
server.use('v2/posts',postRouter_v2); 
server.use('/users',userRouter);

//Writting in routes (Forma1 de hacerlo, con una funcion callback)
server.get('/', (req, res) => {
    res.send('Hello world from express');
});
server.get('/users2', (req, res) => {
    res.send('Send users2 as response');
});

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});


