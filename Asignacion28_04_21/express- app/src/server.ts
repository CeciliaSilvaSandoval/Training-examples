import express from 'express';
import cors from 'cors';
import postRouterv1 from './routes/posts'
// import postRouterv2 from './routes/posts1'
import userRouter from './routes/users'
const server = express();
const port = 3501;

//Set cors headers
server.use(cors());

/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//register routes
server.use('/posts',postRouterv1);
// server.use('/v2/posts',postRouterv2);
server.use('/users',userRouter);

//Forma1
server.get('/users2', (req, res) => {
    res.send('Send users2 as response');
});

server.get('/', (req, res) => {
    res.send('Grettings');
});

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});


