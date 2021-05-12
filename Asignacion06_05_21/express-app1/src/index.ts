// Reads enviroment variables
import 'dotenv/config';

import Server from './server';
// import PostsRoute from './routes/posts.route';
// import UsersRoute from './routes/users.route';
import {Route} from './routes/index.route'
import {Service} from './services/index.service'
import Post from './models/post.entity'
import User from './models/user.entity'
import Company from './models/company.entity'

// initialize server
const postRoute=new Route().register('/posts',new Service(Post));
const companyRoute=new Route().register('/company',new Service(Company));
const server = new Server( 
    [
        // new PostsRoute(),
        // new UsersRoute()
        postRoute,
        companyRoute
    ]
);
// Run server 
server.listen();