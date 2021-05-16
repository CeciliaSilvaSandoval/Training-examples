import express from 'express';
let postsRouterv1 =express.Router();
let data={
    posts:[
        {id:'1',
        userId:'1',
        title: "sunt aut facere repellat provident ",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
        {id:'2',
        userId:'1',
        title: "sunt aut facere repellat provident ",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
        {id:'3',
        userId:'1',
        title: "sunt aut facere repellat provident ",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        }
    ]
};
//We have to implemments the method/verbs to be used 

postsRouterv1.get('/', (req, res) => {
    res.json(data.posts);
});

postsRouterv1.get('/:id', (req, res) => {
    let post=data.posts.filter(item => item.id.toString() == req.params.id );
    // res.json(req.params.id);//Obtenemos el id de params , pero necesitamos la informacion
    res.json(post[0]);
    //Ya podemos ocupar este para visualizar los posts
});

//Adding the method for post 
postsRouterv1.post('/', (req, res) => {
    res.json('Creating postsRouterv1');
});
//Adding the method for patch
postsRouterv1.patch('/', (req, res) => {
    res.json('Patching postsRouterv1');
});
//Adding the method for delete
postsRouterv1.delete('/', (req, res) => {
    res.json('Delating postsRouterv1');
});
export default postsRouterv1;
