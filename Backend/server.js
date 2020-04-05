const express = require('express');
const app = express ();
const cors = require('cors');
const bodyParser = require('body-parser');

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

const staffloginRouter = require('./routes/stafflogin');
app.use('/stafflogin', staffloginRouter);

const adminloginRouter = require('./routes/adminlogin');
app.use('/adminlogin', adminloginRouter);

const lab1Router = require('./routes/labitems');
app.use('/lab', lab1Router);

const lab2Router = require('./routes/labitems');
app.use('/lab', lab2Router);

const lab3Router = require('./routes/labitems');
app.use('/lab', lab3Router);

const labRouter = require('./routes/labitems');
app.use('/lab', labRouter);

const deleteRouter = require('./routes/labitems');
app.use('/lab/lab1', deleteRouter);

const port = 8085;
app.listen(port, () => {
    console.log('server started on port ' + port);
});