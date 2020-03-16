const express = require('express');
const app = expree();

const mongoose = require('mongoose');

const contactRoute = require('./routes/contacts');

//routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

//connect to DB
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
    { useNewUrlParser:true},
    () => console.log('connected to DB')
);

app.listen(8082);