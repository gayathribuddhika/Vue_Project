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

require('./config/db');


/*const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);

const staffloginRouter = require('./routes/stafflogin');
app.use('/stafflogin', staffloginRouter);

const adminloginRouter = require('./routes/adminlogin');
app.use('/adminlogin', adminloginRouter);

const labRouter = require('./routes/labitems');
app.use('/lab', labRouter); */

const Item = require('./routes/lab1_items')
app.use('/lab', Item)

const port = 8085;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});