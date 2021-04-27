import express from 'express';
import postRouter from './routes/posts'
import userRouter from './routes/users'
const server = express();
const port = 3001;

/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
//register routes
server.use('/posts',postRouter);

server.use('/users',userRouter);

//Forma1
server.get('/users2', (req, res) => {
    res.send('Send users2 as response');
});

server.get('/', (req, res) => {
    res.send('Hello world from express');
});

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});


