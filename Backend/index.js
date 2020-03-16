const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require ('mongoose');

mongoose.connect ('mongodb://localhost/Inventory_FAS')
    .then(() => console.log('connected to mongodb..'))
    .catch(err => console.error('Not connected mongodb...', err))

/*const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server started on port ${port}`));*/