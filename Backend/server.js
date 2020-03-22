const express = require('express');
const app = express ();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

require('./models/db');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);

const loginRouter = require('./routes/adsf_login');
app.use('/login', loginRouter);

const itemRouter = require('./routes/items');
app.use('/items', itemRouter);

const port = 8085;
app.listen(port, () => {
    console.log('server started on port ' + port);
});