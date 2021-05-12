// Reads enviroment variables
import 'dotenv/config';

import express from 'express';
import cors from 'cors';

// integremos los modelos a la aplicacion, create connection para crear una coneccion con la base de datos
import { createConnection } from 'typeorm'; 

import postsRouterv1 from './routes/posts';
import usersRouter from './routes/users';
import config from './typeormconfig';

const server = express( );
const port = process.env.SERVER_PORT;

// connect to database
async function connectToPersistence( ) {
  try {
    await createConnection( config );
    console.log(`Persistence layer connected`);
  } catch( error ) {
    console.log(`Persistence layer connection failed : `, error);
    return error;
  } 
}
connectToPersistence( );

// retreive body--- Sin este no se podia enviar el json 1:56
server.use(express.urlencoded());
server.use(express.json());

// Set cors headers
server.use(cors());

// loggin middleware
server.use( (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next( );
});

//register routers
server.use( '/posts', postsRouterv1);
server.use( '/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Grettings!');
});

// error handling
server.use( (error: any, req: any, res: any, next: any) => {
  console.log(`Unhandled Error : `, error);
  res.send(`Unhandled Error, Plase try again!`);
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
