const express = require ('express');
const mongodb = require ('mongodb');

const router = express.Router();

//get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//add posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        Address: req.body.Address
        
    });
    res.status(201).send();
});
//delete posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/Inventory_FAS', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return client.db('Inventory_FAS').collection('Contact_Information', 'Admin_Login');
    
}

module.exports = router;
