// Reads enviroment variables
import 'dotenv/config';
import Server from './server';
// import PostsRoute from './routes/posts.route';
// import UsersRoute from './routes/users.route';
import {Route} from './routes/index.route'
import {Service} from './services/index.service'
import Post from './models/post.entity'

// initialize server
const postRoute=new Route().register('/api/posts',new Service(Post));
const server = new Server( 
    [
        // new PostsRoute(),
        // new UsersRoute()
        postRoute
    ]
);
// Run server 
server.listen();