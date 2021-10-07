const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    roomsNum: {
        type: Number,
        required: true
    },
    roomTypes:{
        type: Array,
        required: true
    }
});
const reservation = mongoose.model("Reservation", reservationSchema);

module.exports = reservation;