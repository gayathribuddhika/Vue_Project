const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Inventory_FAS",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(
        () => { console.log('DB Connected Successfully') },
        err => { console.log('Error in DB Connection' + err) }
    );

