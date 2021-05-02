import express from 'express';
let router_v2=express.Router();
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

router_v2.get('/', (req, res) => {
    res.json(data.posts);
});
//Adding the method for post 
router_v2.post('/', (req, res) => {
    res.json('Creating');
});
//Adding the method for patch
router_v2.patch('/', (req, res) => {
    res.json('Patching');
});
//Adding the method for delete
router_v2.delete('/', (req, res) => {
    res.json('Delating');
});
export default router_v2;
