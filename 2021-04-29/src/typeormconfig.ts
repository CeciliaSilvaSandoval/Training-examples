import { ConnectionOptions } from 'typeorm'; 

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    // This is an array of all the tables in the database, we are going to create it 
    entities: [
        __dirname + '/models/*.entity{.ts,.js}'
    ],
    // for difault is false 
    synchronize: true
};

export default config;