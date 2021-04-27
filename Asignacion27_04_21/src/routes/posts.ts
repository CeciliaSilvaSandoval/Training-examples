import express from 'express';
let router=express.Router();
let posts={
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

router.get('/', (req, res) => {
    res.json(posts.posts);
});
//Adding the method for post 
router.post('/', (req, res) => {
    res.json('Creating');
});
//Adding the method for patch
router.patch('/', (req, res) => {
    res.json('Patching');
});
//Adding the method for delete
router.delete('/', (req, res) => {
    res.json('Delating');
});
export default router;
