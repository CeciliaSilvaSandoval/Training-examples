import express from 'express';
let router_v1=express.Router();
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

router_v1.get('/', (req, res) => {
    res.json(data.posts);
}); 
//Adding the method for post 
router_v1.post('/', (req, res) => {
    res.json('Creating router_v1');
});
//Adding the method for patch
router_v1.patch('/', (req, res) => {
    res.json('Patching router_v1');
});
//Adding the method for delete
router_v1.delete('/', (req, res) => {
    res.json('Delating router_v1');
});
export default router_v1;
