const mongoose = require('mongoose');
const ReservationRequest = require('./reservation');
const ContactRequest = require('./contactReq');
mongoose.connect('mongodb://localhost:27017/hotel');

const reservationSeedData = [
    {
        name: 'David',
        email: 'test@test',
        checkin: '2012-05-28',
        checkout: '2012-05-30',
        adults: 2,
        children: 2,
        rooms: 1,
        roomType: 'Queen'
    },
    {
        name: 'Inbar',
        email: 'test@inbar',
        checkin: '2012-05-28',
        checkout: '2012-05-30',
        adults: 2,
        children: 2,
        rooms: 2,
        roomType: 'Single'
    },
    {
        name: 'Sharon',
        email: 'test@sharon',
        checkin: '2013-07-05',
        checkout: '2013-07-10',
        adults: 2,
        children: 0,
        rooms: 1,
        roomType: 'King'
    }
];
const contactSeedData = [
    {
        name: "David",
        email: "test@david",
        phone: "0546206400",
        subject: "Comments & Feedback",
        text: "Hey this is a comment"
    },
    {
        name: "Inbar",
        email: "test@inbar",
        phone: "0544706478",
        subject: "Comments & Feedback",
        text: "I hate this hotel, change the site font"
    },
    {
        name: "Sharon",
        email: "test@sharon",
        phone: "0547540988",
        subject: "Comments & Feedback",
        text: "Not enough beer 1/10"
    }
    
]

ReservationRequest.insertMany(reservationSeedData).then( success => {
    console.log('success');
}).catch( error => {
    console.log(e);
});
ContactRequest.insertMany(contactSeedData).then( success => {
    console.log('success');
}).catch( error => {
    console.log(error);
})