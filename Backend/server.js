const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./config/db');

const contactRouter = require('./routes/contact');
app.use('/contacts', contactRouter);

const staffloginRouter = require('./routes/stafflogin');
app.use('/stafflogin', staffloginRouter);

const adminloginRouter = require('./routes/adminlogin');
app.use('/adminlogin', adminloginRouter);

const labItem1 = require('./routes/lab1_items');
app.use('/lab', labItem1);

const labItem2 = require('./routes/lab2_items');
app.use('/lab', labItem2);

const labItem3 = require('./routes/lab3_items');
app.use('/lab', labItem3);

const labItem4 = require('./routes/lab4_items');
app.use('/lab', labItem4);

const labItem5 = require('./routes/lab5_items');
app.use('/lab', labItem5);

const port = 8085;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});