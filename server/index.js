const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/posts');

app.use('/posts', posts);

const port = process.env.PORT || 8082;
app.listen(port, () =>console.log(`Server started on port ${port}`));