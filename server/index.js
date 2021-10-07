const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel');
const ContactRequest = require('../models/contactReq');
const Reservation = require('../models/reservation');

const app = express();
const PORT = process.env.PORT || 3001;


// App routing
app.listen(PORT, () => {
    console.log('hey listening');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send("<h1>Hello there!</h1>");
})
app.post('/contact', (req, res) => {
    let contact = new ContactRequest({
        name: req.body['name'],
        email: req.body['email'],
        phone: req.body['phone'],
        subject: req.body['subject'],
        text: req.body['text']
    });
    contact.save().then( success => {
        console.log(success);
        res.send("success");
    }).catch( error => {
        console.log(error);
        res.send("error");
    });
})
app.post('/reservation', (req, res) => {
    let reservation = new Reservation({
        id: req.body['id'],
        name: req.body['name'],
        email: req.body['email'],
        checkin: req.body['checkin'],
        checkout: req.body['checkout'],
        adults: req.body['adults'],
        children: req.body['children'],
        roomsNum: req.body['roomsNum'],
        roomTypes: req.body['roomTypes']
    })
    reservation.save().then( success => {
        console.log(success);
        res.send("success");
    }).catch( error => {
        console.log(error);
        res.send("error");
    })
})
app.get('/api', (req, res) => {
    res.json(
        { message: 'This is a message from the backend'}
    );
})
app.get('*', (req, res) => {
    res.send('<h1>Nothing here yoyo</h1>');
})