import express from 'express';
let postsRouterv2=express.Router();
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

postsRouterv2.get('/', (req, res) => {
    res.json(data.posts);
});
//Adding the method for post 
postsRouterv2.post('/', (req, res) => {
    res.json('Creating postsRouterv2');
});
//Adding the method for patch
postsRouterv2.patch('/', (req, res) => {
    res.json('Patching postsRouterv2');
});
//Adding the method for delete
postsRouterv2.delete('/', (req, res) => {
    res.json('Delating postsRouterv2');
});
export default postsRouterv2;
