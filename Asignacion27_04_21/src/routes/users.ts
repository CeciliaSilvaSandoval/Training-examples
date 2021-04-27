import express from 'express';
let router = express.Router();
let data = {
    users: [
        {
            name: "Leanne Graham-1",
            email: "Sincere@april.biz-1",
            address: {
                city: "Gwenborough-1"
            },
            phone: "1-770-736-8031 1",
            company: {
                name: "Romaguera-Crona-1"
            }
        },
        {
            name: "Leanne Graham-2",
            email: "Sincere@april.biz-2",
            address: {
                city: "Gwenborough-2"
            },
            phone: "1-770-736-8031 2",
            company: {
                name: "Romaguera-Crona-2"
            }
        },
        {
            name: "Leanne Graham-3",
            email: "Sincere@april.biz-3",
            address: {
                city: "Gwenborough-3"
            },
            phone: "1-770-736-8031 3",
            company: {
                name: "Romaguera-Crona-3"
            }
        }
    ]
};

router.get('/', (req, res) => {
    res.json(data.users);
});

export default router;

// //INITIAL COMPONENT
// import express from 'express';
// let router=express.Router();


// router.get('/', (req, res) => {
//     res.send('Send users as response');
// });

// export default router;
